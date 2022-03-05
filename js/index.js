


var stats = {
    resources:{
        food:6,
        tools:6,
        medicine:6,
        oxygen:6,
        water:6,
    },
    astronauts:5,
    max_astronauts:5,
    week_counter:0,
    max_weeks:15,
    next_turn_flag:false,
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        new TitleScene(stats),
        new ImageRenderScene(stats),
        new BrokenCommandPanelEvent(stats),
        new BrokenLightPanelEvent(stats),
        new BrokenTemperatureGaugeEvent(stats),
        new DefeatScene(stats),
        new CreditsScene(stats),
        new ElectricalEvent(stats),
        new ExpositionScene(stats),
        new HoleInShipEvent(stats),
        new LaunchScene(stats),
        new LowTemperatureEvent(stats),
        new O2Event(stats),
        new SpaceSicknessEvent(stats),
        new UIScene(stats),
        new VictoryScene(stats),
    ]
};


let game = new Phaser.Game(config);