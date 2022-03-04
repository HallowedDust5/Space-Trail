class O2Event extends BaseEvent{


    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor(stats){
        super(stats,'O2','assets/sprites/lowoxygen.png','Low Oxygen','Your oxygen tank is almost empty.\nIf you do not replace it, 1 astronaut will die.\nReplacement will cost 1 oxygen tank.',
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