class ExpositionScene extends BaseScene{


    constructor(stats){
        super(stats,'expo-screen')
    }

    preload(){

        this.load.image('expo-bg','assets/sprites/exposcreen.png');

    }

    create(){

        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;

        obj.bkg = this.add.image(0,0,'expo-bg')
            .setOrigin(0,0);

        obj.title_text = this.add.text(
            GAME_WIDTH/2,
            (9/10)*GAME_HEIGHT,
            'Click anywhere to continue',
            {font:'32px'}
        )
            .setOrigin(.5,.5);

        obj.start_trigger = this.add.rectangle(0,0,GAME_WIDTH,GAME_HEIGHT)
            .setOrigin(0,0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start(new LaunchScene().key,this.stats);
        });

    }


}