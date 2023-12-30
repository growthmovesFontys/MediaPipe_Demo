
import { Landmark } from "@mediapipe/tasks-vision";
import { OnScreenElement } from "./onScreenElement";

export class ElementPicker{


    constructor( ) {}

    
    public pickElement = (dataPoints : Landmark[], elementList : OnScreenElement[] ): OnScreenElement => {

        
    // create average datapoint  
    const averageDataPoint = this.calculateAverage(dataPoints);

     
    for ( const foundElement of elementList){

      const xPositionValues = foundElement.getXPosition();
      const yPositionValues = foundElement.getYPosition();
    

      // check if point is between x values
       if( averageDataPoint.x > xPositionValues[0] && averageDataPoint.x < xPositionValues[1]){
        
        // check if point is also between y values
        if(averageDataPoint.y > yPositionValues[0] && averageDataPoint.y < yPositionValues[1]) {

          // return matching element
          this.showAwnser(foundElement);
          return foundElement;

        } 
       } 
    }
  }



  // calculating the average and creating a average position datapoint
  private calculateAverage = (dataPoints : Landmark[]): Landmark => {

    var landMark : Landmark;

    var totalXValue : number = 0;
    var totalYValue : number = 0;
    var totalZValue : number = 0;

  // collect all values in list
  for (const foundDataPoint of dataPoints){

     totalXValue += foundDataPoint.x;
     totalYValue += foundDataPoint.y;
     totalZValue += foundDataPoint.z;

  }

  // calculate average
  landMark.x = (totalXValue / dataPoints.length);
  landMark.y = (totalYValue / dataPoints.length);
  landMark.z = (totalZValue / dataPoints.length);


  return landMark;

  }


  
  // light up the elemebt that has been selected
  private showAwnser(selectedElement: OnScreenElement) {
    selectedElement.getElement().classList.add("activeAwnser");
    setTimeout(() => {
      selectedElement.getElement().classList.remove("activeAwnser");
    }, 1000);

  }



}