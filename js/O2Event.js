class O2Event extends BaseEvent{



    constructor(stats){
        super(stats,'O2','assets/sprites/o2thumbnail.png','Low Oxygen','Your oxygen tank is almost empty.\n If you do not replace it, 1 astronaut will die.\nReplacement will cost 1 oxygen tank.',
        [
            {label:'Fix\nOxygen',onClick:()=>{
                this.stats.resources.oxygen--;
            }},
            {label:'Continue,\nbut let\nastronauts die', onClick:()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){

    }

}