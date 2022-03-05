class BaseEvent extends BaseScene{

    /**
     * @constructor
     * @abstract
     * @param {Object} stats global stats object
     * @param {string} key key that the scene will be referenced by in the Phaser API
     * @param {string} img_id path to the event image. The key of this asset is event-image
     * @param {string} event_title Title of the event, in between event image and description
     * @param {string} event_description Description of event, below title and above choice options
     * @param {Array} choiceButtons list of objects, each object having label and onClick as mandatory parameters. All . backgroundColor, font, color, and hoverColor are all optional.
     * 
     * ex. choiceButtons = [
     *   {
     *      label:'Choice 1',
     *      onClick:()=>{Do something}
     *   },
     *   ...
     * ]
     */
    constructor(stats,key,img_id, event_title='', event_description='',choiceButtons=[]){
        super(stats,key);

        let obj = this.objects;
        obj.img_id = img_id;
        // obj.img_id = 'assets/sprites/lowoxygen.png';
        obj.event_title = event_title;
        obj.event_description = event_description;
        obj.choiceBtnConfig = choiceButtons;
    }

    preload(){
    }

    createAddOn(){

        throw new Error('BaseEvent is an abstract class.');

    }

    create(){
        const GAME_HEIGHT = this.sys.game.config.height;
        const GAME_WIDTH = this.sys.game.config.width;
        let obj = this.objects;
        obj.backRect = this.add.rectangle(GAME_WIDTH/2,GAME_HEIGHT/2,GAME_WIDTH*2/5,GAME_HEIGHT*3/5,0x555a59);
        const HEIGHT = obj.backRect.height;
        const WIDTH = obj.backRect.width;
        const BACKRECT_X = obj.backRect.x-WIDTH/2;
        const BACKRECT_Y = obj.backRect.y-HEIGHT/2


        /*
        CREATES EVENT IMAGE
        */

        obj.event_image = this.add.image(BACKRECT_X+WIDTH/2,BACKRECT_Y+HEIGHT/3.4,obj.img_id)
        .setScale(4.5,4);


        /*
        CREATES EVENT TITLE
        */
        obj.title = this.add.text(
            BACKRECT_X + WIDTH/2,
            obj.event_image.y+obj.event_image.height*2.2 ,
            obj.event_title,
        ).setOrigin(.5,.5)





        /*
        CREATES EVENT DESCRIPTION
        */
        obj.desc = this.add.text(
            BACKRECT_X + WIDTH/2,
            obj.event_image.y+obj.event_image.height*3 ,
            obj.event_description,
        )
        .setOrigin(.5,.5)
        .setStyle({font:'15px'})





        /*
        CREATES CHOICE BUTTONS
        */
        obj.choiceBtns = [];
        const first_btn_x = WIDTH*1.5/8+BACKRECT_X;
        const dist_btwn_btns = WIDTH*2/5;
        const choice_btn_y = BACKRECT_Y+HEIGHT *7/8;
        for (let i = 0; i < obj.choiceBtnConfig.length; i++) {
            let btn = obj.choiceBtnConfig[i];
            obj.choiceBtns.push(
                createButton(
                first_btn_x+dist_btwn_btns*i,
                choice_btn_y,
                btn.label,
                this,
                ()=>{
                    btn.onClick();
                    this.stats.next_turn_flag = !this.stats.next_turn_flag;
                    this.scene.restart();
                    // this.scene.remove(this.key);
                    this.scene.sleep(this.key);
                },
                null,
                '12px',
                '#a5afad',
                )
            );
        }

        this.createAddOn();
    }
    
    
}