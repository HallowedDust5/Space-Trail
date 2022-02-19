class BaseScene extends Phaser.Scene{

/**
 * 
 * @param {Object} stats global stats object
 * @param {string} key key for given scene
 */
    constructor(stats,key){
        super({key:key});
        this.key = key;
        this.stats = stats;
        this.objects = {};
    }

    create(){
        throw new Error('BaseScene is an abstract class.')
    }



    

}