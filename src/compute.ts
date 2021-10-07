import { Game } from "./types";
import { LastFrame } from "./types";
import { Frame } from "./types";

export function compute(game: Game): number {
  var TotalScore = 0;
  var FrameArray: any;
  var isLastFrame = false;

  FrameArray = game.flat();
  for (var i = 0; i <= FrameArray.length - 3; i = i + 2){
    if (isLastFrame == false && i == 18){ //LastFrame
      isLastFrame = true;
      TotalScore = TotalScore + FrameArray[i] + FrameArray[i + 1] + FrameArray[i + 2]

    } else if (FrameArray[i] == 10){ // strike
      TotalScore = TotalScore + FrameArray[i] + FrameArray[i + 2]

      if (FrameArray[i + 2] == 10){
        TotalScore = TotalScore + FrameArray[i + 4];

      } else {
        TotalScore = TotalScore + FrameArray[i + 3];
      }
    } else if (FrameArray[i] + FrameArray[i + 1] == 10 && FrameArray[i] != 10){ //spare
      TotalScore = TotalScore + FrameArray[i] + FrameArray[i + 1] + FrameArray[i + 2]

    } else { //normal
      TotalScore = TotalScore + FrameArray[i] + FrameArray[i + 1]

    }
  }
  return TotalScore;
   
}

