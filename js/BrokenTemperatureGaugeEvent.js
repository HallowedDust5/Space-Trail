class BrokenTemperatureGaugeEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Broken Temperature Gauge', '', 'The temperature gauge has broken', 'The temperature gauge is broken and\n you cannot control the ships temperature.\n Use one spare part to fix it.',
        [
            {label: 'Fix the\n Temperature Gauge', onClick:()=>{
                this.stats.resources.tools-3;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.resources.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}