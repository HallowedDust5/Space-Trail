class CreditsScene extends BaseScene{


    constructor(stats){
        super(stats,'credits-screen');
    }

    preload(){

    }

    create(){
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;

        obj.credits_text = this.add.text(
            GAME_WIDTH/2,
            GAME_HEIGHT/10,
            'CREDITS',
            {font:'32px'}
        )
            .setOrigin(.5,.5);



    }
}