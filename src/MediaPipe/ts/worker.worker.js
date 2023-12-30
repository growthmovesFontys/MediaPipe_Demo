import { PositionMarker } from "./positionMarker";

addEventListener('message', (event) => {

  PositionMarker = event.data;

  const result = performHeavyComputation(PositionMarker);
  
  // Send the result back to the main thread
  postMessage(result);
});

function performHeavyComputation(positionMarker) {
    // Your asynchronous logic
    positionMarker.initPrinting().then(() => {
      // When the asynchronous operation is complete, send the result back
      postMessage('Init complete');
      return true;
    });
      
}
