


var stats = {
    resources:{
        food:0,
        tools:0,
        medicine:0,
        oxygen:0,
        water:0,
    },
    astronauts:5,
    week_counter:0,
    max_weeks:30,

};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        new TitleScene(stats),
        // new O2Event(stats),
        // new ElectricalEvent(stats),
        // new LowTemperature(stats),
        // new BrokenCommandPanelEvent(stats),
        // new BrokenLightPanelEvent(stats),
        // new BrokenTemperatureGaugeEvent(stats),
        // new ElectricalEvent(stats),
        // new HoleInShipEvent(stats),
        // new SpaceSicknessEvent(stats),
        new LaunchScene(stats), 
        // new UIScene(stats),
        // new LaunchScene(stats),
        // new VictoryScene(stats),
        new DefeatScene(stats),
    ]
};


let game = new Phaser.Game(config);