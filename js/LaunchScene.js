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
        
        
        this.load.image('space-bkg','assets/sprites/starfield.png');
        
        
        this.objects = {};

    }

    create(){
        let obj = this.objects;
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width; 
        const TEXT_CONFIG = {font:'32px',fill:"#fff",backgroundColor:'#000'};


        const MAX_RESOURCE = 10;

        const MAX_SUM_RESOURCE = 30; //Max num of resources, when all resources are summed up

        const sum = arr =>{
            let x=0;
            arr.forEach(element => {
                x+=element;
            });
            return x;
        };

        obj.bkg = this.add.image(0,0,'space-bkg')
            .setOrigin(0,0);



        //Adds background for stats buttons
        obj.backRect = this.add.rectangle(GAME_WIDTH/2,GAME_HEIGHT/2,GAME_WIDTH/1.4,GAME_HEIGHT/3,0xffffff);

        //First stat's rectangle x coord
        let first_stat_x = obj.backRect.x - obj.backRect.x/1.8;
        const DIST_BTWN_STATS = obj.backRect.width/5.2;
        obj.tool_rects = [];
        
        //Generates rectangles for all stats
        //THIS IS MEANT TO BE CHANGED LATER
        //whether that be the colors, this is only a basic layout
        for (let i = 1; i <= Object.keys(this.stats.resources).length; i++) {
            obj.tool_rects.push(this.add.rectangle(first_stat_x,obj.backRect.y,obj.backRect.width/5.3,obj.backRect.height/1.3,0x555a59));
            
            first_stat_x+= DIST_BTWN_STATS;
        }

        let stats_buttons = {}; //Array of OnClicks for the stats buttons
        //Makes the stats buttons

        first_stat_x = obj.backRect.x - obj.backRect.x/1.8;
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

                label:this.add.text(first_stat_x,obj.backRect.y-obj.backRect.y/11,`${key}:${this.stats.resources[key]}`,).setOrigin(.5,.5),
                plus:createButton(first_stat_x,obj.backRect.y-5,'+',this,plus,null,'20px','#fff','#000'),
                minus:createButton(first_stat_x,obj.backRect.y+20,'-',this,minus,null,'20px','#fff','#000'),
                icon:this.add.image(first_stat_x,obj.backRect.y-50,`${key}-icon`).setScale(.75)
            }

            //Increments each tools' x coord
            first_stat_x+=DIST_BTWN_STATS;
        }


        obj.next_turn_btn = createButton(
            GAME_WIDTH*(27/33.3),
            GAME_HEIGHT*(23/25),
            'NEXT',
            this,
            ()=>{
                this.scene.start(new UIScene().key,this.stats);
            },
        );

        obj.instructions = this.add.text(GAME_WIDTH/2,GAME_HEIGHT/4,'Pick your supplies for the long journey.\nYou can only pick a maximum of thirty supplies',{align:'center'}).setOrigin(.5,.5)


 


        
    }


}