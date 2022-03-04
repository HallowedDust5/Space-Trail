class LowTemperature extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor (stats) {
        super(stats, 'Low Temperature', 'lowtemperature', 'the temperature is very low', '\t\tthe temperature has reached exceedingly\n\t\t\tlow levels. Lose one canister of water,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tor let an astronaut die.',
        [
            {label: '\tLose a \n canister\n of water', onClick:()=>{
                this.stats.resources.water--;
            }},
            {label: '\t\tContinue and let\n an astronaut die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}