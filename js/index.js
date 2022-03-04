


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
    next_turn_flag:false,
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        new TitleScene(stats),
        new O2Event(stats),
        new ElectricalEvent(stats),
        new LowTemperature(stats),
        new BrokenCommandPanelEvent(stats),
        new BrokenLightPanelEvent(stats),
        new BrokenTemperatureGaugeEvent(stats),
        new ElectricalEvent(stats),
        new HoleInShipEvent(stats),
        new SpaceSicknessEvent(stats),
        new LaunchScene(stats), 
        new UIScene(stats),
        new LaunchScene(stats),
        new VictoryScene(stats),
        new DefeatScene(stats),
        new CreditsScene(stats),
        new ExpositionScene(stats),
    ]
};


let game = new Phaser.Game(config);