class UIScene extends BaseScene{


/**
 * 
 * @param {Object} stats global stats object
 */
    constructor(stats){
        super(stats,'ui');
    }


    preload(){


        // Loads icons
        Object.keys(stats.resources).forEach(key => {
            this.load.image(`${key}-icon`,`assets/${key}-icon.png`);
        });



    }

    create(){
        let obj = this.objects;
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;
        const INV_BKG_RECT_WIDTH = GAME_WIDTH*(6/33.3);
        const INV_BKG_RECT_HEIGHT = GAME_HEIGHT*(2/25);

        obj.inv_bkg_rects = [];
        obj.inv_title_text = [];
        obj.inv_icons = [];
        obj.next_turn_btn;


        /*
        BACKGROUND INVENTORY RECTANGLES
        */



        //Create inv title 
        obj.inv_bkg_rects.push(
            this.add.rectangle(
                2,
                2,
                INV_BKG_RECT_WIDTH,
                INV_BKG_RECT_HEIGHT/2,
                0xffffff
            ).setOrigin(0,0)
        )

        //Makes each inv background rectangle
        for (let i = 0; i < Object.keys(stats.resources).length; i++) {
            let y_coord = obj.inv_bkg_rects[0].height+i*(INV_BKG_RECT_HEIGHT+5)+4;
            
            obj.inv_bkg_rects.push(
                this.add.rectangle(
                    obj.inv_bkg_rects[0].x,
                    y_coord,
                    INV_BKG_RECT_WIDTH,
                    INV_BKG_RECT_HEIGHT,
                    0xffffff
                ).setOrigin(0,0)
            );
    
    
    
            
        }
        



        /*
        INVENTORY TITLES TEXT
        */

        let titles = ['INVENTORY'];
        
        titles.push(...Object.keys(this.stats.resources));

        for (let i = 0; i < obj.inv_bkg_rects.length; i++) {
            let rect = obj.inv_bkg_rects[i];
            let title = titles[i];

            obj.inv_title_text.push(
                this.add.text(
                    rect.x+rect.width/2,
                    rect.y+rect.height/2,
                    title,
                    {font:'10px',fill:"#000"}
                ).setOrigin(.5,.5)
            );
        }






        /*
         *INVENTORY ICONS 
         */

        for (let i = 0; i < obj.inv_bkg_rects.slice(1).length; i++) {
            const rect = obj.inv_bkg_rects[i+1];
            const key = Object.keys(stats.resources)[i]
            obj.inv_icons.push(
                this.add.image(rect.x+(.3/6)*rect.width,rect.y+rect.height*.5,`${key}-icon.png`)
                    .setOrigin(0,.5)
            );
            
        }
        







        /*
         * WEEK COUNTER
         */

        obj.week_counter = this.add.text(
            (1/33.3)*GAME_WIDTH,
            (20/25)*GAME_HEIGHT,
            `WEEK\n${this.stats.week_counter}/${this.stats.max_weeks}`,
        )
            .setOrigin(0,0)
            .setStyle({backgroundColor:'#ffffff',fill:'#000000',font:'40px'});



    
    
    
    
        






        /*
         * NEXT TURN
         */

        thi


    
    }






}