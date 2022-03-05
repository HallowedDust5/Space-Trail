class HoleInShipEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor (stats) {
        super(stats, 'Hole in the Ship', 'holeintheship', 'There is a hole in the ship', 'The ship has a big hole in the\nside, causing low oxygen. If the\nhole is not fixed within the next\nturn, everyone dies. Repairs cost\n3 spare parts.',
        [
            {label: 'Fix the hole', onClick:()=>{
                this.stats.resources.tools-=3;
            }},
            {label: 'Continue and let\n everyone die', onClick: ()=>{
                this.stats.astronauts=0;
            }}
        ]
        )
    }

    createAddOn(){}

}