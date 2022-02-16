class BaseEvent extends BaseScene{


    constructor(stats,key,img_path, event_title, event_description){
        super(stats,key);


        this.img_path = img_path;
        this.event_title = event_title;
        this.event_description = event_description;
    }

    preload(){
        this.load.image('event-image',this.img_path);
    }

    create(){



        this.make();
    }
    
    make(){
        throw new Error('make() not defined');
    }
}