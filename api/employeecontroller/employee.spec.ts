import { test as baseTest, expect } from '../../fixtures';

type EmployeePayload = {
  dob: string;
  email: string;
  firstName: string;
  lastName: string;
};

type Employee = EmployeePayload & { id: number };

const test = baseTest.extend<{ createdEmployeeId: number | null }>({
  createdEmployeeId: [null, { scope: 'test' }],
});

const parseJson = (text: string | null) => {
  if (!text || !text.trim()) return null;
  try { return JSON.parse(text); } catch { return null; }
};

const attachResponse = async (testInfo: any, title: string, response: any) => {
  const text = await response.text();
  const headers = response.headers();
  console.log(`${title}:`, text);
  await testInfo.attach(`${title}-body`, {
    body: text || '',
    contentType: 'application/json',
  });
  await testInfo.attach(`${title}-headers`, {
    body: JSON.stringify(headers, null, 2),
    contentType: 'application/json',
  });
  return text;
};

const makeEmployeePayload = (overrides: Partial<EmployeePayload> = {}): EmployeePayload => ({
  dob: '1986-12-23',
  email: `test.employee.${Date.now()}@example.com`,
  firstName: 'Testfn',
  lastName: 'Testln',
  ...overrides,
});

const createEmployee = async (request: any, testInfo: any, overrides: Partial<EmployeePayload> = {}) => {
  const payload = makeEmployeePayload(overrides);
  const response = await request.post('/api/v1/employees', { data: payload });
  expect([200, 201]).toContain(response.status());

  const text = await attachResponse(testInfo, 'create-employee-response', response);
  const body = parseJson(text) as Employee | null;
  let id = body?.id;

  if (!id) {
    const headers = response.headers();
    const loc = headers.location || headers.Location;
    if (loc) {
      const m = loc.match(/\/(\d+)(?:$|\/?|\?)/);
      if (m) id = Number(m[1]);
    }
  }

  if (!id) {
    const headers = response.headers();
    throw new Error(
      `Unable to resolve employee id from create response. status=${response.status()}, body=${JSON.stringify(
        body,
      )}, headers=${JSON.stringify(headers)}`,
    );
  }

  return { id: id as number, payload, body };
};

async function getSimulateToken(request: any, testInfo: any) {
  const response = await request.post('/api/v1/simulate/token', {
    data: { username: 'admin', password: 'admin' },
  });
  const text = await attachResponse(testInfo, 'simulate-token-response', response);
  expect(response.status()).toBe(200);
  const body = parseJson(text);
  expect(body).toHaveProperty('token');
  return body.token as string;
}

test('get all employees', async ({ request }, testInfo) => {
  const response = await request.get('/api/v1/employees');
  const text = await attachResponse(testInfo, 'get-all-employees-response', response);
  expect(response.status()).toBe(200);
  const responseBody = parseJson(text);
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThanOrEqual(1);
  expect(responseBody[0]).toMatchObject({
    dob: expect.any(String),
    email: expect.any(String),
    firstName: expect.any(String),
    id: expect.any(Number),
    lastName: expect.any(String),
  });
});

test('create a new employee', async ({ request, createdEmployeeId }, testInfo) => {
  const { id, payload, body } = await createEmployee(request, testInfo);
  createdEmployeeId = id;
  expect(body).toMatchObject({
    ...payload,
    id: expect.any(Number),
  });
});

test('get employee by ID', async ({ request, createdEmployeeId }, testInfo) => {
  const { id, payload } = await createEmployee(request, testInfo);
  createdEmployeeId = id;

  const response = await request.get(`/api/v1/employees/${id}`);
  const text = await attachResponse(testInfo, 'get-employee-by-id-response', response);
  expect(response.status()).toBe(200);
  const responseBody = parseJson(text);
  expect(responseBody).toMatchObject({ id, ...payload });
});

test('update employee by ID', async ({ request }, testInfo) => {
  const { id } = await createEmployee(request, testInfo);
  const updatePayload = {
    dob: '1986-12-24',
    email: `updated.employee.${Date.now()}@example.com`,
    firstName: 'Updatedfn',
    lastName: 'Updatedln',
  };

  const response = await request.put(`/api/v1/employees/${id}`, { data: updatePayload });
  const text = await attachResponse(testInfo, 'update-employee-response', response);
  expect([200, 204]).toContain(response.status());

  const getResponse = await request.get(`/api/v1/employees/${id}`);
  const getText = await attachResponse(testInfo, 'get-updated-employee-response', getResponse);
  expect(getResponse.status()).toBe(200);
  const getResponseBody = parseJson(getText);
  expect(getResponseBody).toMatchObject({ id, ...updatePayload });

  const deleteResponse = await request.delete(`/api/v1/employees/${id}`);
  expect(deleteResponse.status()).toBe(204);
});

test('delete employee by ID', async ({ request }, testInfo) => {
  const { id } = await createEmployee(request, testInfo);

  const response = await request.delete(`/api/v1/employees/${id}`);
  const text = await attachResponse(testInfo, 'delete-employee-response', response);
  expect(response.status()).toBe(204);

  const getResponse = await request.get(`/api/v1/employees/${id}`);
  const getText = await attachResponse(testInfo, 'get-deleted-employee-response', getResponse);
  expect(getResponse.status()).toBe(404);
  const getResponseBody = parseJson(getText);
  expect(getResponseBody).toBeNull();
});

test('simulate token endpoint returns JWT token', async ({ request }, testInfo) => {
  const token = await getSimulateToken(request, testInfo);
  expect(typeof token).toBe('string');
  expect(token.length).toBeGreaterThan(10);
});

test('simulate get all employees with bearer token', async ({ request }, testInfo) => {
  const token = await getSimulateToken(request, testInfo);
  const response = await request.get('/api/v1/simulate/get/employees', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const text = await attachResponse(testInfo, 'simulate-get-employees-response', response);
  expect(response.status()).toBe(200);
  const responseBody = parseJson(text);
  expect(Array.isArray(responseBody)).toBeTruthy();
  if (responseBody.length > 0) {
    expect(responseBody[0]).toMatchObject({
      dob: expect.any(String),
      email: expect.any(String),
      firstName: expect.any(String),
      id: expect.any(Number),
      lastName: expect.any(String),
    });
  }
});

test('simulate server error endpoint returns 500', async ({ request }, testInfo) => {
  const response = await request.get('/api/v1/simulate/server/error');
  const text = await attachResponse(testInfo, 'simulate-server-error-response', response);
  expect(response.status()).toBe(500);
  expect(text).toBeTruthy();
});

