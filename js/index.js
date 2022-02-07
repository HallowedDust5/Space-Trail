
let based = new BaseEvent();


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        [
            //Title screen goes here
            based,
        ]
    }
};


let game = new Phaser.Game(config);