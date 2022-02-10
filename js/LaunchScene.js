class LaunchScene extends Phaser.Scene{

    constructor(stats){
        super();
        this.player_stats = stats;
    }

    preload(){
        /*
        Load needed assets here
        */ 

        this.objects = {};
    }

    create(){
        let objs = this.objects;
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width; 

        function nextTurn() {
            
            //Load next scene first
            this.destroy();
        }


        objs.nextTurnButton = new Button(GAME_WIDTH*(7/8),GAME_HEIGHT*(7/8)+20,'Next Turn',this,nextTurn);

        
        
    }
}