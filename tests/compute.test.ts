import { compute } from "../src/compute";
import { Game } from "../src/types";

it("should return 300 on a perfect game", () => {
  const input300: Game = [
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
  ];
  const score = compute(input300);
  expect(score).toBe(300);
});

it("should return 75 on a basic game", () =>{
  const input75: Game = [
    [1, 2],
    [3, 4],
    [5, 5],
    [6, 1],
    [3, 2],
    [3, 7],
    [3, 3],
    [3, 3],
    [3, 3],
    [3, 3, 0],
  ];
  const score3 = compute(input75)
  expect(score3).toBe(75);
});

it("should return 136 on a basic game with spares", () =>{
  const input136: Game = [
    [5, 5],
    [3, 7],
    [6, 4],
    [2, 8],
    [7, 3],
    [1, 9],
    [7, 3],
    [5, 5],
    [2, 8],
    [1, 9, 2],
  ];
  const score2 = compute(input136);
  expect(score2).toBe(136);
});