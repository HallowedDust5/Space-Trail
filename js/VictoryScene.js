class VictoryScene extends BaseScene{


    constructor(stats){
        super(stats,'victory-screen');
    }

    preload(){

        this.load.image('victory-bg','assets/sprites/winscreen.png');

    }

    create(){
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;

        obj.bkg = this.add.image(0,0,'victory-bg')
            .setOrigin(0,0);

        obj.restart_text = this.add.text(
            GAME_WIDTH/2,
            (9/10)*GAME_HEIGHT,
            'Click anywhere to restart',
            {font:'32px'}
        )
            .setOrigin(.5,.5);

        obj.trigger = this.add.rectangle(0,0,GAME_WIDTH,GAME_HEIGHT)
            .setOrigin(0,0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                window.location.reload(true);
            });



    }


}