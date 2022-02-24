let events = [
    O2Event,
    LaunchScene,
    //Add other events here
];

function randInt(min, max) {
    return Math.floor((max - min) * Math.random() + min);
}

function randScene(scene) {
    let rand_index = randInt(0,events.length);
    let chosen_scene = new  events[rand_index]();
    
    
    scene.scene.launch(
        chosen_scene.key, //Gets random scene's key
        scene.stats //Gives the stats object to pass into the next scene
        );
        events.splice(rand_index)

        return chosen_scene;
}