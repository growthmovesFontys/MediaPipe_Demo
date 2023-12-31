# MediaPipe Demo

A demonstrational Typescript project showcasing how the MediaPipe Layer can be integrated in a project.
The original MediaPipe Layer can be found here: https://github.com/growthmovesFontys/MediaPipe_Layer

## Installation

1. **Install the MediaPipe tasks-vision NPM package:**
    ```bash
    npm i @mediapipe/tasks-vision
    ```

2. **Add the needed folders to your project:**
   Place the `mediaPipeLayer/src/ts` and `mediaPipeLayer/src/ts` folders in a location convenient for your project structure.

3. **Import components into your `Index.ts` file:**
   In your own `Index.ts` file, import the necessary components from `mediaPipeLayer/src/ts/Index.ts`.

4. **Create a div element in your `index.html` file:**
   Include a `<div>` element in your `index.html` file to serve as a container for the MediaPipe components.

5. **Initialize MediaPipe components in your `Index.ts`:**
   Initialize the MediaPipe components in your `Index.ts` file and pass the created `<div>` element as an argument.

6. **Use MediaPipe components in your project:**
   Leverage the MediaPipe components as needed within your project to enhance functionality.

7. **Compile files using webpack:**
   Compile your TypeScript files using webpack. Make sure to refer to the generated `bundle.js` in your `index.html` file.

8. **Style or hide HTML components using a CSS file:**
   Utilize a CSS file to style or hide the HTML components created by MediaPipe. The relevant selectors are:
   - `/#webcam`
   - `/#output_video`
   - `/#enableWebcamButton`

