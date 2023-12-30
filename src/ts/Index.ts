import * as MediaPipe from "../MediaPipe/ts/index";

// Select button to print with
// This would be the button to activate the motion tracking in a game
const printerButton = document.getElementById("printer") as HTMLButtonElement;

// check if there is a webcam present
const hasGetUserMedia = () =>

    !!navigator.mediaDevices?.getUserMedia;

// if a webcam is found    
if (hasGetUserMedia()) {

    // select the element where the mediapipe layer can create the elements
    const mediaDiv = document.getElementById("mediaBox") as HTMLDivElement;

    // activating the PositionMarker and passing on the HTMLDivElement
    const poseActivator = new MediaPipe.PoseActivator();
    var positionMarker: MediaPipe.PositionMarker;
    poseActivator.setOutputDiv(mediaDiv);
    poseActivator.initWebcamButton(new MediaPipe.PoseCameraProcessor());

    // The Mediapipe Layer creates a event to signal the initializing is complete
    // Here u can retrieve the positionMarker and allow the user to enable the motiontracking
    document.body.addEventListener(
        "webcamButtonClickCompleted",
        (event) => {

            // fetch the initialized positionMarker
            positionMarker = poseActivator.getPositionMarker();

            // enable button to start mediapipe functionality
            // this could also be a key that u can click to switch to motion tracking for example...
            printerButton.disabled = false;
        }
    );

    // if no webcam is found   
} else {
    console.warn(
        "getUserMedia() is not supported by your browser"
    );
}

//
// examples how to use the PositionMarker
//

//
// Adding a click event listener to a button ( ! used for this demo ! )
//


printerButton.addEventListener("click", function () {

    // reading the position giving a array of body landmarks
    // u can find the landmarks here: https://developers.google.com/static/mediapipe/images/solutions/pose_landmarks_index.png
    const bodyLandmarks: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var foundLandmarks: MediaPipe.Landmark[] = positionMarker.readPosition(bodyLandmarks);

    // loop trough the found landmarks
    foundLandmarks.forEach((landMark) => {

        console.log("LandMark X: " + landMark.x);
        console.log("LandMark Y: " + landMark.y);
        console.log("LandMark Z: " + landMark.z);

    });

});

//
// in a Phaser game loop - has to be edited out to prevent errors
//

/*

// in the loop itself
{
    movePlayer(player);
}


// in a class responsible for moving the player
function movePlayer(player){
    // variables
    var xPosition;
    var yPosition;
    var player;

    // reading the position
    var positions = readPosition();

    // null handling to prevent errors
    if (positions.length > 0) {
        xPosition = positions[0];
        yPosition = positions[1];
    }

    // move the player dependend on the position
    if (xPosition > 0 && xPosition < 0.33) {
        console.log("left");
        player.setVelocityX(-160);
        player.anims.play("left", true);
    } else if (xPosition >= 0.33 && xPosition < 0.66) {
        console.log("center");
        player.setVelocityX(0);
        player.anims.play("turn");
    } else if (xPosition >= 0.66 && xPosition <= 1.0) {
        console.log("right");
        player.setVelocityX(160);
        player.anims.play("right", true);
    }
    if (yPosition < 0.5 && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}


// in a class responsible for reading the user position
function readPosition() {

    // reading the position giving a array of body landmarks
    // u can find the landmarks here: https://developers.google.com/static/mediapipe/images/solutions/pose_landmarks_index.png
    const bodyLandmarks: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var foundLandmarks: MediaPipe.Landmark[] = positionMarker.readPosition(bodyLandmarks);

    // calculating the average position of the user
    var totalXVal = 0;
    var totalYVal = 0;

    foundLandmarks.forEach(addUp);
    function addUp(foundLandmark: MediaPipe.Landmark) {
        totalXVal = totalXVal + foundLandmark.x;
        totalYVal = totalYVal + foundLandmark.y;
    }

    const xPosition = totalXVal / foundLandmarks.length;
    const yPosition = totalYVal / foundLandmarks.length;

    // returning the average position of the user
    return [xPosition, yPosition];
}


*/

