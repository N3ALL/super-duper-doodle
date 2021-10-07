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

it("should return 58 on a basic game", () =>{
  const input58: Game = [
    [1, 2],
    [3, 4],
    [5, 1],
    [6, 1],
    [3, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [3, 3],
    [3, 3, 0],
  ];
  const score3 = compute(input58)
  expect(score3).toBe(58);
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