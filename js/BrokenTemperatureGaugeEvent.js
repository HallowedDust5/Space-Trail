class BrokenTemperatureGaugeEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Broken Temperature Gauge', 'brokentemperaturegauge', 'The temperature gauge has broken', 'The temperature gauge is broken\nand you cannot control the ships\ntemperature. Use one spare part to\nfix it.',
        [
            {label: 'Fix the\n Temperature Gauge', onClick:()=>{
                this.stats.resources.tools-=3;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}