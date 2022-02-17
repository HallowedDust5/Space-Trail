class BaseEvent extends BaseScene{

    /**
     * @constructor
     * @abstract
     * @param {Object} stats global stats object
     * @param {string} key key that the scene will be referenced by in the Phaser API
     * @param {string} img_path path to the event image. The key of this asset is event-image
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
    constructor(stats,key,img_path, event_title='', event_description='',choiceButtons=[]){
        super(stats,key);

        let obj = this.objects;
        obj.img_path = img_path;
        obj.event_title = event_title;
        obj.event_description = event_description;
        obj.choiceBtnConfig = choiceButtons;
    }

    preload(){
        this.load.image('event-image',this.objects.img_path);
    }

    createAddOn(){
        // throw new Error('BaseEvent is an abstract class.');
    }

    create(){
        const GAME_HEIGHT = this.sys.game.height;
        const GAME_WIDTH = this.sys.game.width;
        let obj = this.objects;
        obj.backRect = this.add.rectangle(GAME_WIDTH/2,GAME_HEIGHT/2,GAME_WIDTH*2/5,GAME_HEIGHT*3/5,0xffffff);

        const HEIGHT = obj.backRect.height;
        const WIDTH = obj.backRect.width;

        createButton(100,100,'bruh',this,()=>{console.log(this);})

        //Creates each choice button
        obj.choiceBtns = [];
        const first_btn_x = WIDTH*7/8;
        const dist_btwn_btns = WIDTH*1/8;
        const choice_btn_y = HEIGHT-HEIGHT*7/8;
        for (let i = 0; i < obj.choiceBtnConfig.length; i++) {
            let btn = obj.choiceBtnConfig[i];
            console.log(btn);
            obj.choiceBtns.push(createButton(
                first_btn_x+dist_btwn_btns*i,
                choice_btn_y,
                btn.label,
                this,
                btn.onClick,
                ));
        }



        this.createAddOn();
    }
    
    
}