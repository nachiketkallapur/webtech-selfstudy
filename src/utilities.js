export const drawPerson = (detections, danger, ctx) => {
  // Loop through each prediction
  detections.forEach((prediction, i) => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set styling
    // const color = Math.floor(Math.random()*16777215).toString(16);
    var color;
    if (danger.has(i)) color = 'FF0000';
    else color = '00FF00';
    
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    // ctx.arc(x+0.5*width,y+0.5*height,4,0,2*Math.PI);
    ctx.stroke();
  });
}




