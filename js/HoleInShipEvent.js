class HoleInShipEvent extends BaseEvent {
    /**
     * @constructor
     * @param {Object} stats Global stats object
     */
    constructor (stats) {
        super(stats, 'Hole in the Ship', 'assets/sprites/Hole_in_ship_good.png', 'There is a hole in the ship', 'The ship has a big hole in the side, \ncausing low oxygen. If the hole is not \nfixed within th enext turn, \neveryone dies. Repairs cost 3 spare parts',
        [
            {label: 'Fix the hole', onClick:()=>{
                this.stats.resources.tools-3;
            }},
            {label: 'Continue and let\n everyone die', onClick: ()=>{
                this.stats.resources.astronauts=0;
            }}
        ]
        )
    }

    createAddOn(){}

}