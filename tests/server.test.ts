import request from "supertest";
import { app } from "../src/server";

it("has a compute endpoint that returns the score with status code 200", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ score: 300 });
});

it("Input validation(game is missing a frame), response status should be 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
  
});

it("Input validation(game contains invalid frame), response status should be 400", async () => {
  const response = await request(app)
    .post("/compute")
    .send({
      game: [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
      ],
    });

  expect(response.status).toBe(400);
  
});