class BrokenCommandPanelEvent extends BaseEvent {

    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {

        super(stats, 'Broken Command Panel', 'brokencommandpanel', 'The command panel has broken', 'The command panel is broken and\nyou cannot control the ship or\ncontact Earth. Use two spare parts\nto fix it.',
        [
            {label: 'Fix the \ncommand pannel', onClick:()=>{
                this.stats.resources.tools-=2;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}