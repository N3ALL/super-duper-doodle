import http from "http";
import express from "express";
import { compute } from "./compute";

export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;
  if (game == null || game.length != 10){
    response.sendStatus(400);
  } 
  else {
    response.send({score: compute(game)}).status(200)
  }
});
