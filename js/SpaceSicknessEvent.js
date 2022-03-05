class SpaceSicknessEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Space Sickness', 'spacesickness', 'You have space sickness', 'You have been nauseous, due to the fact\nthat you are suffering from space sickness.\nUse one medicine to cure it.',
        [
            {label: 'Take\n Medicine', onClick:()=>{
                this.stats.resources.medicine--;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}