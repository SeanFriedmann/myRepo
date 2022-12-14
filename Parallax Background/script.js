const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //contains properties and draw in methods 
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;
//let gameFrame = 0;

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

window.addEventListener('load', function() {
    const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(event) {
    console.log(event.target.value);
    gameSpeed = event.target.value;
    showGameSpeed.innerHTML = event.target.value;
});

class Layer { //used for creating similar objects
    constructor(image, speedModifier){
        this.x = 0; //set x on this object to 0
        this.y - 0; 
        this.width = 2400;
        this.height = 700;
       // this.x2 = this.width; //set 2nd img to keep loop
        this.image = image; //tell constructor called img on new object to equal image we pass as arg
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier; //each layer moves at diff speed but still tied to game speed
    }
    update() {
        //reset layers 
        //wrapped in reusable class to allow us for all 5 layers
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = 0;
        }
        this.x = this.x - this.speed;


       // this.x = gameFrame * this.speed % this.width;
    }
    draw() {
        //redraw img at new position
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

}
const layer1 = new Layer(backgroundLayer1, 0.2);//half game speed
const layer2 = new Layer(backgroundLayer2, 0.4);
const layer3 = new Layer(backgroundLayer3, 0.6);
const layer4 = new Layer(backgroundLayer4, 0.8);
const layer5 = new Layer(backgroundLayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

//ctx.drawImage(backgroundLayer1,x, 0, 0);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear old frames, built in method
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
   // gameFrame--;
    requestAnimationFrame(animate);
};
animate();
});

