class BrokenLightPanelEvent extends BaseEvent {

    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Broken Light Panel', 'brokenlightpanel', 'The light panels have broken', 'The light panels have broken and\nyou cannot see without the lights\non. Use two spare parts to fix it.',
        [
            {label: 'Fix the lights', onClick:()=>{
                this.stats.resources.tools-=2;
            }},
            {label: 'Continue and let\n everyone die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}