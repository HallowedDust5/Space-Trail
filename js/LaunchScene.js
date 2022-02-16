class LaunchScene extends Phaser.Scene{

    /**
     * 
     * @param {Object} stats Pass the global stats objects through 
     */
    constructor(stats){
        super({key:'launch scene'});
        this.key = 'launch scene';
        this.stats = stats.resources;
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
        const DIST_BTWN_STATS = objs.backRect.width/5.2;
        objs.tool_rects = [];
        
        //Generates rectangles for all stats
        //THIS IS MEANT TO BE CHANGED LATER
        //whether that be the colors, this is only a basic layout
        for (let i = 1; i <= Object.keys(this.stats).length; i++) {
            objs.tool_rects.push(this.add.rectangle(first_stat_x,objs.backRect.y,objs.backRect.width/5.3,objs.backRect.height/1.3,0x000000));
            
            first_stat_x+= DIST_BTWN_STATS;
        }


        let stats_buttons = {}; //Array of OnClicks for the stats buttons
        //Makes the stats buttons
        let i=0;
        first_stat_x =objs.backRect.x - objs.backRect.x/1.8;
        for (const key in this.stats) {

            //onClick Functions
            let plus = ()=>{
                if(this.stats[key]>=MAX_RESOURCE){return;}
                this.stats[key]++;
            };

            let minus = ()=>{
                if(this.stats[key]<=0){return;}
                this.stats[key]--;
            };

            
            //Makes the label, plus and minus buttons 
            stats_buttons[key] = {
                label:this.add.text(first_stat_x,objs.backRect.y-objs.backRect.y/11,key,).setOrigin(.5,.5),
                plus:new Button(first_stat_x,objs.backRect.y-5,'+',this,plus,undefined,'20px Comic Sans'),
                minus:new Button(first_stat_x,objs.backRect.y+20,'-',this,minus,undefined,'20px Comic Sans'),
            }

            //Increments each tools' x coord
            first_stat_x+=DIST_BTWN_STATS;
        }



        new Button(100,100,'bruh',this,randScene);

 


        
    }


}