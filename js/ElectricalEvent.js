class ElectricalEvent extends BaseEvent {

    constructor (stats) {
        super(stats, 'Electrical Problem', 'assets/sprites/wirethumbnail.png', 'the electricity cut off', 'a part of the ship\'s wiring has been cut off.\n\t\t\t\tUse two spare parts to fix it. Continue,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tand let an astronaut die.',
        [
            {label: 'Fix\nelectricity', onClick:()=>{
                this.stats.resources.tools--;
            }},
            {label: 'Continue and let\n an astronaut die', onClick: ()=>{
                this.stats.resources.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}