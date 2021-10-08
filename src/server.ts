import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;
  // TODO: Validate input
  if (game == null || game.length != 10){
    response.sendStatus(400);
  } 
  // TODO: Return response
  else {
    const score1 = compute(game);
    response.send({score: score1}).status(200)
  }
});
