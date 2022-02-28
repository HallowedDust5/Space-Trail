class LowTemperature extends BaseEvent {

    constructor (stats) {
        super(stats, 'Low Temperature', 'assets/sprites/Snowthumbnail.png', 'the temperature is very low', '\t\tthe temperature has reached exceedingly\n\t\t\tlow levels. Lose one canister of water,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tor let an astronaut die.',
        [
            {label: '\tLose a \n canister\n of water', onClick:()=>{
                this.stats.resources.water--;
            }},
            {label: '\t\tContinue and let\n an astronaut die', onClick: ()=>{
                this.stats.resources.astronauts--;
            }}
        ]
        )
    }

    createAddOn(){}

}