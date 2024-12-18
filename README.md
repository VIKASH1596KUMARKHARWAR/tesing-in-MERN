# Unit Testing with Mocked External Service Calls

When writing unit tests, it is crucial to isolate the core logic of your application and ensure it behaves as expected. To achieve this, all external service calls, such as database queries or API requests, are mocked. Mocking allows you to test your code without relying on the availability of external systems.

## Why Mock External Services?

1. **Isolation of Core Logic:**
   - Unit tests should validate the behavior of your functions or methods independently.
   - External dependencies like databases, APIs, or message queues are not part of your core logic and should be excluded from unit tests.

2. **Reliability:**
   - Tests that depend on external services can fail due to network issues, database unavailability, or API downtime, leading to inconsistent test results.

3. **Performance:**
   - Mocked tests run much faster since they don't interact with external systems, enabling rapid development and feedback loops.

4. **Simplicity:**
   - Running a database or other services for unit tests adds complexity to the setup process.
   - Mocking removes the need for complex configurations and ensures tests run in any environment.

## How It Works

When you mock external service calls, you assume that these services will work correctly. For example:
- **Database Calls**: Assume the database query executes and returns the expected result.
- **API Requests**: Simulate the API response as though the external service returned it.
- **File Systems/Queues**: Emulate file reads/writes or message publishing.

This allows you to focus solely on testing your application's logic and ensure it responds correctly to the mocked inputs/outputs.

### Example Workflow
1. Identify external service calls in your application (e.g., database queries, HTTP requests).
2. Replace actual calls with mocked implementations in your unit tests.
3. Define expected inputs and outputs for these mocked calls.
4. Write tests for your application's logic, assuming the mocked services behave as expected.

### Tools for Mocking
- **Node.js/JavaScript:**
  - [Jest](https://jestjs.io/) with `jest.fn()` or `jest.mock()`.
  - [vitest]
  - [Sinon](https://sinonjs.org/) for spies, stubs, and mocks.
- **Python:**
  - [unittest.mock](https://docs.python.org/3/library/unittest.mock.html) for mocking functions and objects.
- **Java:**
  - [Mockito](https://site.mockito.org/) for mocking in Java unit tests.

### Example Code

#### Service
```javascript
export const fetchUserData = async (userId) => {
  const user = await database.query(`SELECT * FROM users WHERE id = ${userId}`);
  return user;
};

