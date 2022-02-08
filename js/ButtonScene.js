class ButtonScene extends Phaser.Scene{

    constructor() {
        super();
    }

    preload(){
        this.objects ={};//Creates objects so that we can access what we create later in a less verbose way
    }

    create(){
        
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width; 

        let group = this.add.container();


        //This adds our text to our class's objects, then changes attributes of the text
        this.objects.text = this.add.text(GAME_WIDTH*(7/8),GAME_HEIGHT*(7/8)+20,'Next Turn')
            .setFontSize(32)
            .setFontFamily('TestFont')
            .setOrigin(.5,.5);

        let text = this.objects.text;

        this.objects.textBg = this.add.rectangle(text.x,text.y,text.width,text.height,0x6666ff);

        group.add([text,this.objects.textBg]);

        group.bringToTop(text);
    
    
    }








}