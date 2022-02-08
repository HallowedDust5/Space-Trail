class ButtonScene extends Phaser.Scene{

    /**
     * 
     * @param {Object} player_stats Global player stats variable to be passed to all scene instances
     */
    constructor(player_stats) {
        super();
    }

    preload(){
        this.objects ={};//Creates objects so that we can access what we create later in a less verbose way
    }

    create(){
        
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width; 
        let onClick = ()=>{
            //Do something
        }


        this.objects.btn = new Button(GAME_WIDTH*(7/8),GAME_HEIGHT*(7/8)+20,'Next Turn',this,onClick());


  
    
    
    }








}