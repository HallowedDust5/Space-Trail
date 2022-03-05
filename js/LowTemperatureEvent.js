class LowTemperatureEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor (stats) {
        super(stats, 'Low Temperature', 'lowtemperature', 'the temperature is very low', 'The temperature has reached\nexceedingly low levels. Lose one\ncanister of water, or let an\nastronaut die.',
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