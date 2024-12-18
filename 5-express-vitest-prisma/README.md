# Unit Testing with Vitest, Supertest, and Mocked Prisma Client

This project demonstrates the use of **Vitest**, **Supertest**, and a mocked **Prisma Client** to perform efficient and isolated unit testing for API routes. By mocking database interactions, we ensure tests are independent of external services, allowing them to run quickly and reliably.

---

## Key Features

- **Vitest**: A modern, blazing-fast, and simple test runner.
- **Supertest**: Enables HTTP assertions for testing RESTful APIs seamlessly.
- **Mocked Prisma Client**: Allows database queries to be simulated, eliminating the need for an actual database during testing.

---

## Project Structure

The code is organized into the following main parts:

1. **API Endpoints**:
   - `POST /sum`: Calculates the sum of two numbers.
   - `GET /sum`: Retrieves the sum of two numbers from query parameters.

2. **Test Suite**:
   - Tests for API endpoints using `Supertest` and `Vitest`.
   - Mocking of Prisma Client to avoid interacting with a real database.

3. **Mocked Database**:
   - Simulates Prisma Client operations using `vitest-mock-extended`.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **npm** (or **yarn**)

---

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repository
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the tests:
   ```bash
   npm test
   ```

---

## Libraries and Concepts Used

### Vitest

- A fast and lightweight test runner.
- Provides built-in utilities like `describe`, `test`, `it`, and `expect`.

### Supertest

- A library for testing HTTP endpoints.
- Allows you to make HTTP requests to your API and validate responses.

### Mocked Prisma Client

- Created using `vitest-mock-extended`.
- Replaces actual database interactions with mocked responses.
- Ensures database-dependent logic is testable without requiring a live database.

### Mocking and Spying

- **Mocking**: Simulating external modules or services (e.g., Prisma Client) for isolated testing.
- **Spying**: Monitoring calls to mocked functions to verify behavior and arguments passed.

---

## Example Code

### Mocking Prisma Client

```javascript
import { PrismaClient } from '@prisma/client';
import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';

export const prismaClient = mockDeep<PrismaClient>();

beforeEach(() => {
  mockReset(prismaClient);
});
```

### Testing with Supertest and Vitest

```javascript
import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../index';
import { prismaClient } from '../__mocks__/db';

vi.mock('../db');

describe('POST /sum', () => {
  it('should return the sum of two numbers', async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 2,
      result: 3,
    });

    const res = await request(app).post('/sum').send({ a: 1, b: 2 });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it('should return 411 if no inputs are provided', async () => {
    const res = await request(app).post('/sum').send({});

    expect(res.statusCode).toBe(411);
    expect(res.body.message).toBe('Incorrect inputs');
  });
});
```

---

## Benefits of This Approach

1. **Fast Feedback**:
   - Tests run locally without the need for external services.

2. **Reliability**:
   - Mocking ensures tests are not affected by external failures (e.g., database downtime).

3. **Isolated Logic**:
   - Focuses on business logic, ensuring core functionalities are robust.

4. **Maintainability**:
   - Clear test structure and reusable mocks make the code easier to maintain.

---

## Conclusion

By combining Vitest, Supertest, and a mocked Prisma Client, this project achieves efficient, isolated, and reliable unit testing for API endpoints. This approach ensures high-quality code and faster development cycles.

