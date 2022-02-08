// import BaseEvent from './ButtonScene'


let based = new ButtonScene();


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [
        //Title screen goes here 
        ButtonScene,
    ]
};


let game = new Phaser.Game(config);