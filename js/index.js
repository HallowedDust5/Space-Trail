// import BaseEvent from './ButtonScene'




var stats = {
    //Add ship stats here
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [
        //Title screen goes here 
        new ButtonScene(stats),
    ]
};


let game = new Phaser.Game(config);