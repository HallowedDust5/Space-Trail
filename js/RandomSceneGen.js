let events = [
    O2Event,
    //Add other events here
];

let randInt = (min,max) =>{
    return Math.floor((max-min)*Math.random()+min);
};

function randScene(scene) {
    let chosen_scene = events[randInt(0,events.length)];
    scene.scene.start(
        new chosen_scene({bruh:'bruh'}).key, //Gets random scene's key
        scene.stats //Gives the stats object to pass into the next scene
        );
        return chosen_scene;
}