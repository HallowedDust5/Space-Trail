class TitleScene extends BaseScene{


    constructor(stats){
        super(stats,'title-screen');
    }

    preload(){

        this.load.image('stars-bg','../assets/sprites/starsbackgroundtest.png');


    }

    create(){
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;


        obj.bkg = this.add.image(0,0,'stars-bg')
            .setScale(2);
        obj.title_text = this.add.text(
            GAME_WIDTH/2,
            (7/8)*GAME_HEIGHT,
            'Click anywhere to start',
            {font:'32px'}
        )
            .setOrigin(.5,.5);

        

        obj.trigger = this.add.rectangle(0,0,GAME_WIDTH,GAME_HEIGHT)
            .setOrigin(0,0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start(new LaunchScene().key,this.stats);
            });



    }


}