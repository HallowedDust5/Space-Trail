class DefeatScene extends BaseScene{


    constructor(stats){
        super(stats,'defeat-screen');
    }

    preload(){

        /*
        Load needed assets here
        */ 

    }

    create(){
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;

        let obj = this.objects;

        obj.defeat_text = this.add.text(
            GAME_WIDTH/2,
            GAME_HEIGHT/2,
            'Defeat',
            {font:'32px',
            color:'#FF0000'}
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