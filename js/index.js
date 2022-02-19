


var stats = {
    resources:{
        tools:0,
        food:0,
        medicine:0,
        oxygen:0,
        water:0,
    },
    numOfCrewMembers:5,
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt:true,

    scene: [
        //Title screen goes here
        new BaseEvent(stats,'based','/assets/sprites/o2thumbnail.png',
            'Test',
            'Im just testing this bruv no biggie',
            [{label:'Choice 1',onClick:()=>{console.log(this);}},{label:'Chocie 2',onClick:()=>{console.log(this);}}]
        ),
        // new LaunchScene(stats), 
    ]
};


let game = new Phaser.Game(config);