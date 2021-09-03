const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("Test POST /launch", () => {
  test("It should respond with 200 success", () => {});

  test("It should catch missing required properties", () => {});

  test("It should catch invalid dates", () => {});
});
