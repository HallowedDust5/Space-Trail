class SpaceSicknessEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Space Sickness', '', 'You have space sickness', 'You have been nauseous, due to the fact\n that you are suffering from space sickness.\n Use one medicine to cure it.',
        [
            {label: 'Take\n Medicine', onClick:()=>{
                this.stats.resources.medicine--;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.resources.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}