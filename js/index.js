


var stats = {
    resources:{
        tools:0,
        food:0,
        medicine:0,
        oxygen:0,
        water:0,
    },
    astronauts:5,

};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        //Title screen goes here
        new O2Event(stats)
        // new LaunchScene(stats), 
    ]
};


let game = new Phaser.Game(config);