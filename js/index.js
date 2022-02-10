
//These items will be in the inventory set in the stats objects
var items = [
    'water purifier',
    ''
];

var stats = {
    tools:0,
    food:0,
    medicine:0,
    oxygen:0,
    water:0,
    inventory: Set(),
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: [
        //Title screen goes here
        new LaunchScene(stats), 
        // new ButtonScene(stats),
    ]
};


let game = new Phaser.Game(config);