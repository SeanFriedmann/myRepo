let playerState = 'run';
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change', function(event){ //whenever a dropdown value is clicked, playerState is changed to that variable
    playerState = event.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //allows context to 2d drawing methods


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); //img constructor (same as img tag)
playerImage.src = "shadow_dog.png"; //put png in same folder as html file, aka Front End Game
const spriteWidth = 575; //6876/12 = 573
const spriteHeight = 523; //5230/10


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
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY}); //push values into location array on line 30
    }

    spriteAnimations[state.name] = frames; //key value pair

}); //foreach method, function expression shortcut, state.name, first is index 0 then 1

console.log(animationStates);

function animate(){ //this function allows us to switch between animations without having to manually change anything other than playerState
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //has 6 animation frames

    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, 
    spriteHeight, 0, 0, spriteWidth, spriteHeight) //what you want to draw, x and y coords
  
    gameFrame++;
    requestAnimationFrame(animate) //run function passed to it, will run over and over as an animation loop
};
animate();