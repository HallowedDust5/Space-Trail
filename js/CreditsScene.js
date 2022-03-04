class CreditsScene extends BaseScene{


    constructor(stats){
        super(stats,'credits-screen');
    }

    preload(){

        this.load.image('credits-bg','assets/sprites/creditsscreen.png');

    }

    create(){
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;

        obj.bkg = this.add.image(0,0,'credits-bg')
            .setOrigin(0,0);

        obj.credits_trigger = createButton(
            GAME_WIDTH/20,
            (19/20)*GAME_HEIGHT,
            'Title Screen',
            this,
            (scene)=>{
                scene.scene.start(new TitleScene().key,this.stats);
            },
            null,
            undefined,
            '#ffffff',

        )
            .setOrigin(0,1);



    }
}