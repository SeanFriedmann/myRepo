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
const staggerFrames = 5; //0 will stop animation, animation speed
const spriteAnimations = [ ];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; s++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY}); //push values into location array on line 30
    }
}) //foreach method, function expression shortcut, state.name, first is index 0 then 1


function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6; //has 6 animation frames
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, 
    spriteHeight, 0, 0, spriteWidth, spriteHeight) //what you want to draw, x and y coords
  
    gameFrame++;
    requestAnimationFrame(animate) //run function passed to it, will run over and over as an animation loop
};
animate();