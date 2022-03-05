class O2Event extends BaseEvent{


    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor(stats){
        super(stats,'O2','lowoxygen','Low Oxygen','Your oxygen tank is almost empty.\nIf you do not replace it, 1\nastronaut will die. Replacement\nwill cost 1 oxygen tank.',
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