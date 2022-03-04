const events = [
    O2Event,
    ElectricalEvent,
    LowTemperatureEvent,
    BrokenCommandPanelEvent,
    BrokenLightPanelEvent,
    BrokenTemperatureGaugeEvent,
    ElectricalEvent,
    HoleInShipEvent,
    SpaceSicknessEvent,
];

function randInt(min, max) {
    return Math.floor((max - min) * Math.random() + min);
}

/**
 * 
 * @param {Phaser.Scene} scene Given scene to use as renderer
 * @param {Phaser.Scene} last_scene Gives the last scene rendered so it can be taken out of the array to be randomized from
 * @returns {BaseEvent} The event that is now on screen
 */
function randScene(scene,last_scene) {


    
    let events_copy = [...events];
    
    events_copy.pop(events.indexOf(last_scene));
    
    let rand_index = randInt(0,events_copy.length);

    let chosen_scene = events_copy[rand_index];
    
    
    let bruh = scene.scene.launch(
        new chosen_scene().key, //Gets random scene's key
        scene.stats //Gives the stats object to pass into the next scene
        );

        console.log(new chosen_scene().key);
        
    scene.scene.moveAbove(scene.key,new chosen_scene().key);

    return chosen_scene;
}