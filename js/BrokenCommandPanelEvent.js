class BrokenCommandPanelEvent extends BaseEvent {

    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    // asset needed
    constructor (stats) {
        super(stats, 'Broken Command Panel', 'assets/sprites/brokencommandpanel.png', 'The command panel has broken', 'The command panel is broken and you cannot\n control the ship or contact Earth.\n Use two spare parts to fix it.',
        [
            {label: 'Fix the \ncommand pannel', onClick:()=>{
                this.stats.resources.tools-2;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.resources.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}