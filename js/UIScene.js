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
            this.load.image(`${key}-icon`,`assets/sprites/${key}-icon.png`);
        });



    }

    create(){
        let obj = this.objects;
        const GAME_WIDTH = this.sys.game.config.width;
        const GAME_HEIGHT = this.sys.game.config.height;
        const INV_BKG_RECT_WIDTH = GAME_WIDTH*(6/33.3);
        const INV_BKG_RECT_HEIGHT = GAME_HEIGHT*(2/25);
        const INV_SUPPLY_TEXT_CONFIG = {font:'10px',fill:"#000"};

        obj.inv_bkg_rects = [];
        obj.inv_supply_text = [];
        obj.inv_count = {};
        obj.inv_icons = [];

        obj.lives_bkg;
        obj.lives_icons = [];
        obj.lives_title;

        obj.next_turn_btn;



        /*
        BACKGROUND INVENTORY RECTANGLES
        */



        //Create inv title background
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

        let rect = obj.inv_bkg_rects[0];
        obj.inv_title = this.add.text(
            rect.x+rect.width/2,
            rect.y+rect.height/2,
            'INVENTORY',
            INV_SUPPLY_TEXT_CONFIG
        ).setOrigin(.5,.5);



        let supply_text = [];
        supply_text.push(...Object.keys(this.stats.resources));

        let supply_text_bkg_rects = obj.inv_bkg_rects.slice(1);

        for (let i = 0; i < supply_text_bkg_rects.length; i++) {
            let rect = supply_text_bkg_rects[i];
            let title = supply_text[i];
            
            obj.inv_supply_text.push(
                this.add.text(
                    rect.x+rect.width*(3/5),
                    rect.y+rect.height/2,
                    title,
                    INV_SUPPLY_TEXT_CONFIG
                    )
                    .setOrigin(.5,.5)
            );
        }


        /*
         *INVENTORY COUNT 
         */

        for (let i = 0; i < obj.inv_supply_text.length; i++) {
            const inv_supply_text = obj.inv_supply_text[i];
            const key = inv_supply_text.text;

            obj.inv_count[key] = this.add.text(
                inv_supply_text.x+35,
                inv_supply_text.y,
                this.stats.resources[key],
                INV_SUPPLY_TEXT_CONFIG
            )
                .setOrigin(.5,.5);

            
        }




        /*
         *INVENTORY ICONS 
         */

        for (let i = 0; i < obj.inv_bkg_rects.slice(1).length; i++) {
            const rect = obj.inv_bkg_rects[i+1];
            const key = Object.keys(stats.resources)[i]
            obj.inv_icons.push(
                this.add.image(rect.x+(.3/6)*rect.width,rect.y+rect.height*.5,`${key}-icon`)
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
             * Lives
             */

            obj.lives_bkg = this.add.rectangle(
                (27.3/33.3)*GAME_WIDTH,
                GAME_HEIGHT/15,
                (4/33.3)*GAME_WIDTH,
                (18/25)*GAME_HEIGHT,
                0xffffff
            ).setOrigin(0,0);
    
            let icon_rect ={
                x:obj.lives_bkg.x+0.2*obj.lives_bkg.width,
                y:obj.lives_bkg.y+(1/40)*obj.lives_bkg.height,
                height:obj.lives_bkg.height*(18/20),
                width:obj.lives_bkg.width*(3/5),
            };

            let image_height = (icon_rect.height-20)/this.stats.astronauts;
            for (let i = 0; i < this.stats.astronauts; i++) {
                obj.lives_icons.push(
                    this.add.rectangle(
                        icon_rect.x,
                        icon_rect.y+i*(image_height+10),
                        icon_rect.width,
                        image_height,
                        0xdf3945
                    ).setOrigin(0,0)
                )
            }
        






        /*
         * NEXT TURN
         */

        const updateUI = () => {
            obj.week_counter
                .setText(`WEEK\n${this.stats.week_counter}/${this.stats.max_weeks}`);

            //Updates the count
            for (const supply_text_key in obj.inv_count) {
                obj.inv_count[supply_text_key].setText(this.stats.resources[supply_text_key]);
            }
        }

        obj.next_turn_btn = createButton(
            GAME_WIDTH*(27/33.3),
            GAME_HEIGHT*(23/25),
            'NEXT',
            this,
            ()=>{
                randScene(this);
                if (Object.values(this.stats.resources).some(x=>x<1)) {
                    /*
                     * Tear down all scenes and give loss screen
                     */
                    console.log('not enough resources');
                    return;
                }

                else if(this.stats.week_counter===this.stats.max_weeks){
                    //Tear down all scenes and give the win screen
                    console.log('Reached max weeks');
                    return;
                }

                //Successful turn where 
                this.stats.week_counter++;
                updateUI();
            },
        );


    
    }






}