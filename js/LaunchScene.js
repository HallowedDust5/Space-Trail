class LaunchScene extends BaseScene{

    /**
     * 
     * @param {Object} stats Pass the global stats objects through 
     */
    constructor(stats){
        super(stats,'launch');
    }

    preload(){
        /*
        Load needed assets here
        */ 

    }

    create(){
        let objs = this.objects;
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width; 

        const MAX_RESOURCE = 10;
        const MAX_SUM_RESOURCE = 30; //Max num of resources, when all resources are summed up

        const sum = arr =>{
            let x=0;
            arr.forEach(element => {
                x+=element;
            });
            return x;
        };



        //Adds background for stats buttons
        objs.backRect = this.add.rectangle(GAME_WIDTH/2,GAME_HEIGHT/2,GAME_WIDTH/1.4,GAME_HEIGHT/6,0xffffff);

        //First stat's rectangle x coord
        let first_stat_x = objs.backRect.x - objs.backRect.x/1.8;
        const DIST_BTWN_STATS = objs.backRect.width/5.2;
        objs.tool_rects = [];
        
        //Generates rectangles for all stats
        //THIS IS MEANT TO BE CHANGED LATER
        //whether that be the colors, this is only a basic layout
        for (let i = 1; i <= Object.keys(this.stats.resources).length; i++) {
            objs.tool_rects.push(this.add.rectangle(first_stat_x,objs.backRect.y,objs.backRect.width/5.3,objs.backRect.height/1.3,0xd93093));
            
            first_stat_x+= DIST_BTWN_STATS;
        }

        let stats_buttons = {}; //Array of OnClicks for the stats buttons
        //Makes the stats buttons
        first_stat_x = objs.backRect.x - objs.backRect.x/1.8;
        for (const key in this.stats.resources) {
            
            //onClick Functions
            let plus = ()=>{
                if(this.stats.resources[key]>=MAX_RESOURCE){return;}//Stops if it's at MAX_RESOURCE
                if(sum(Object.values(this.stats.resources))+1>MAX_SUM_RESOURCE){return;}//Stops if the sum of all resources is at MAX_SUM_RESOURCE
                this.stats.resources[key]++;
                stats_buttons[key].label.setText(`${key}:${this.stats.resources[key]}`)
            };

            let minus = ()=>{
                if(this.stats.resources[key]<=0){return;}
                this.stats.resources[key]--;
                stats_buttons[key].label.setText(`${key}:${this.stats.resources[key]}`)
            };

            
            //Makes the label, plus and minus buttons 
            stats_buttons[key] = {
                label:this.add.text(first_stat_x,objs.backRect.y-objs.backRect.y/11,`${key}:${this.stats.resources[key]}`,).setOrigin(.5,.5),
                plus:createButton(first_stat_x,objs.backRect.y-5,'+',this,plus,undefined,'20px Comic Sans'),
                minus:createButton(first_stat_x,objs.backRect.y+20,'-',this,minus,undefined,'20px Comic Sans'),
            }

            //Increments each tools' x coord
            first_stat_x+=DIST_BTWN_STATS;
        }



        createButton(100,100,'bruh',this,randScene);

 


        
    }


}