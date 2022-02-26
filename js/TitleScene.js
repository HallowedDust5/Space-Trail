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
            (4/5)*GAME_HEIGHT,
            'Click anywhere to start',
            {font:'32px'}
        )
            .setOrigin(.5,.5);

        

        obj.start_trigger = this.add.rectangle(0,0,GAME_WIDTH,GAME_HEIGHT)
            .setOrigin(0,0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start(new LaunchScene().key,this.stats);
            });
        
        obj.credits_trigger = createButton(
            (19/20)*GAME_WIDTH,
            (19/20)*GAME_HEIGHT,
            'Credits',
            this,
            (scene)=>{
                scene.scene.start(new CreditsScene().key,this.stats);
            },
            null,
            undefined,
            '#ffffff',

        )
            .setOrigin(1,1);

    }


}