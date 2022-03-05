class ElectricalEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor (stats) {
        super(stats, 'Electrical Problem', 'electricalproblem', 'the electricity cut off', 'A part of the ship\'s wiring has\nbeen cut off. Use two spare parts\nto fix it. Continue, and let an\nastronaut die.',
        [
            {label: 'Fix\nelectricity', onClick:()=>{
                this.stats.resources.tools--;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}