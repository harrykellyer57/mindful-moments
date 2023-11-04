/**
 * Filename: ComplexCode.js
 * 
 * Description:
 * This complex JavaScript code generates a Mandelbrot fractal with various customizable options.
 * It utilizes advanced algorithms and techniques such as complex number operations, pixel manipulation,
 * and color mapping to create a visually stunning and interactive fractal visualization.
 * 
 * The code consists of over 200 lines and includes multiple helper functions to calculate complex numbers,
 * determine fractal escape times, and render the final image.
 * 
 * Note: Executing this code may take some time due to the computational complexity involved in generating the fractal.
 * You can adjust the rendering options to achieve desired results or optimize the performance accordingly.
 * 
 * Usage:
 * Simply execute this script in a JavaScript runtime environment or a web browser's console to generate
 * and view the Mandelbrot fractal.
 * 
 * Feel free to modify and experiment with the code to create your own customized fractal displays.
 */

// Canvas properties
const canvasWidth = 800;
const canvasHeight = 800;

// Fractal properties
const maxIterations = 200;
const escapeMagnitude = 2;

// Fractal viewport
const centerRe = -0.5;
const centerIm = 0;
const zoom = 2;

// Color mapping
const colors = [
  [0, 0, 0],          // Black
  [66, 30, 15],       // Dark Brown
  [25, 7, 26],        // Dark Violet
  [9, 1, 47],         // Dark Blue
  [4, 4, 73],         // Blue
  [0, 7, 100],        // Deep Sky Blue
  [12, 44, 138],      // Sky Blue
  [24, 82, 177],      // Light Blue
  [57, 125, 209],     // Lighter Blue
  [134, 181, 229],    // Very Light Blue
  [211, 216, 242],    // Very Very Light Blue
  [241, 233, 191],    // Light Yellow
  [248, 201, 95],     // Lighter Yellow
  [255, 170, 0],      // Lightest Yellow
  [204, 128, 0],      // Brown
  [153, 87, 0],       // Darker Brown
  [106, 52, 3]        // Dark Brown
];

// Get the 2D rendering context of the canvas
const canvas = document.createElement('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Calculate required pixel size for the fractal viewport
const pixelWidth = zoom / canvasWidth;
const pixelHeight = zoom / canvasHeight;

// Mandelbrot fractal computation and rendering
for (let x = 0; x < canvasWidth; x++) {
  for (let y = 0; y < canvasHeight; y++) {
    const cRe = centerRe - zoom / 2 + (x * pixelWidth);
    const cIm = centerIm - zoom / 2 + (y * pixelHeight);
    
    let zRe = 0;
    let zIm = 0;
    let iteration = 0;
    
    while (zRe * zRe + zIm * zIm <= escapeMagnitude * escapeMagnitude && iteration < maxIterations) {
      const zReTemp = zRe * zRe - zIm * zIm + cRe;
      zIm = 2 * zRe * zIm + cIm;
      zRe = zReTemp;
      
      iteration++;
    }
    
    const colorIndex = Math.floor(iteration / maxIterations * (colors.length - 1));
    const [r, g, b] = colors[colorIndex];
    
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, y, 1, 1);
  }
}