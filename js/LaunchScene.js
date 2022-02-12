class LaunchScene extends Phaser.Scene{

    /**
     * 
     * @param {Object} stats Pass the global stats objects through 
     */
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

        const MAX_RESOURCE = 10;



        //Adds background for stats buttons
        objs.backRect = this.add.rectangle(GAME_WIDTH/2,GAME_HEIGHT/2,GAME_WIDTH/1.4,GAME_HEIGHT/6,0xffffff);

        //First stat's rectangle x coord
        let first_stat_x = objs.backRect.x - objs.backRect.x/1.8;
        objs.tool_rects = [];
        
        //Generates rectangles for all stats
        //THIS IS MEANT TO BE CHANGED LATER
        //whether that be the colors, this is only a basic layout
        for (let i = 1; i <= Object.keys(this.stats).length; i++) {
            objs.tool_rects.push(this.add.rectangle(first_stat_x,objs.backRect.y,objs.backRect.width/5.3,objs.backRect.height/1.3,0x000000));
            
            first_stat_x+= objs.backRect.width/5.2;
        }
        
        let tools_button_onClick = () =>{};
        let food_button_onClick = () =>{};
        let medicine_button_onClick = () =>{};
        let oxygen_button_onClick = () =>{};
        let water_button_onClick = () =>{};



        objs.tools_button = new Button()
        objs.food_button = 
        objs.medicine_button = 
        objs.oxygen_button = 
        objs.water_button = 
 


        
    }


}