


var stats = {
    resources:{
        food:0,
        tools:0,
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
        // new UIScene(stats)
        new LaunchScene(stats),
        new O2Event(stats),
    ]
};


let game = new Phaser.Game(config);