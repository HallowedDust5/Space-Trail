class BaseScene extends Phaser.Scene{


    constructor(stats,key){
        super({key:key});
        this.key = key;
        this.stats = stats.resources;
        this.objects = {};
    }





}