class LaunchScene extends Phaser.Scene{

    constructor(stats){
        super({key:'launch scene'});
        this.key = 'launch scene';
        this.stats = stats;
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

        function nextTurn(scene) {
            
            //Load next scene first
            // this.remove(this.key);
        console.log(scene.scene.remove(scene.key));
        }


        objs.nextTurnButton = new Button(GAME_WIDTH*(7/8),GAME_HEIGHT*(7/8)+20,'Next Turn',this,nextTurn);

        
        
    }


}