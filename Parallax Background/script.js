const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //contains properties and draw in methods 
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

let x = 0; //position of first igm
let x2 = 2400; //position of second identical img

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear old frames, built in method
    ctx.drawImage(backgroundLayer4, x, 0); //built in canvas method
    ctx.drawImage(backgroundLayer4, x2, 0);
    if (x < -2400) x = 2400 + x2 - gameSpeed; //allows for seamless switch between canvases, no empty space based off game speed
    else x -= gameSpeed; 
    if (x2 < -2400) x = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();
