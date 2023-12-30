import { BodyPartToRead } from "./bodyPartToRead";
import { ElementPicker } from "./elementPicker";
import { OnScreenElement } from "./onScreenElement";
import { PositionMarker } from "./positionMarker";

export class PositionReader {

    private positionMarker: PositionMarker;
    private bodyPartToRead: BodyPartToRead;
  
    constructor(positionMarker: PositionMarker, bodyPartToRead: BodyPartToRead) {
      this.positionMarker = positionMarker;
      this.bodyPartToRead = bodyPartToRead;
    }
  
    public readPositions = () => {
      const printPositions = () => {
        const dataPoints = this.positionMarker.readPosition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
        for (const foundPoint of dataPoints) {
          console.log("Xvalue: " + foundPoint.x);
          console.log("Yvalue: " + foundPoint.y);
        }
      };
      setInterval(printPositions, 250);
    };
  
    public displayPositions = (elementPicker: ElementPicker, screenElements: OnScreenElement[]) => {
      const displayPositions = () => {
        const dataPoints = this.positionMarker.readPosition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
        for (const foundPoint of dataPoints) {
          elementPicker.pickElement(dataPoints, screenElements);
        }
      };
      setInterval(displayPositions, 1000);
    };
  
    public assignToButton = (elementPicker: ElementPicker, screenElements: OnScreenElement[], button: HTMLButtonElement) => {
      if (this.positionMarker != null) {
        button.addEventListener("click", () => {
          const dataPoints = this.positionMarker.readPosition([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
          elementPicker.pickElement(dataPoints, screenElements);
        });
      } else {
        console.log("PositionMarker not initialized yet...");
      }
    };
  }
