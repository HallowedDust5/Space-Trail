


var stats = {
    resources:{
        food:1,
        tools:1,
        medicine:1,
        oxygen:1,
        water:1,
    },
    astronauts:5,
    max_astronauts:5,
    week_counter:0,
    max_weeks:30,

};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        //Title screen goes here
        new UIScene(stats),
        new O2Event(stats),
        new TitleScene(stats),
        new LaunchScene(stats),
        // new VictoryScene(stats),
        new DefeatScene(stats),

    ]
};


let game = new Phaser.Game(config);