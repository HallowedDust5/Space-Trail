let events = [
    O2Event,
    ElectricalEvent,
    LowTemperature,
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
 * @param {Phaser.scene} scene Given scene to use as renderer
 * @returns {BaseEvent} The event that is now on screen
 */
function randScene(scene) {
    let rand_index = randInt(0,events.length);
    let chosen_scene = new  events[rand_index]();
    
    
    let bruh = scene.scene.launch(
        chosen_scene.key, //Gets random scene's key
        scene.stats //Gives the stats object to pass into the next scene
        );

        // events.splice(rand_index);
        
    scene.scene.moveAbove(scene.key,chosen_scene.key);

    return chosen_scene;
}