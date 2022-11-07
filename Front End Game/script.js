const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //allows context to 2d drawing methods


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); //img constructor (same as img tag)
playerImage.src = "shadow_dog.png"; //put png in same folder as html file, aka Front End Game
const spriteWidth = 575; //6876/12 = 573
const spriteHeight = 523; //5230/10

let frameX = 0;
let frameY = 0;
let gameFrame = 0; //frame speed
const staggerFrames = 5; //0 will stop animation

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100); //width and height of 100, start at blocks 50 50
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight) //what you want to draw, x and y coords
   
    if (gameFrame % staggerFrames ==0){ //will only move to next animation every 5 times through the loop function
    if (frameX < 6) frameX++; //one less than final frame
    else frameX = 0;
    }
    gameFrame++;

    
    
    //last 2 vars draw frame at original size

    //more in depth taking 9 args
   // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw. dh);

    requestAnimationFrame(animate) //run function passed to it, will run over and over as an animation loop
};
animate();