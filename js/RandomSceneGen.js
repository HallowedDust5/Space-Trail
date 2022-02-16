let events = [
    LaunchScene,
    //Add other event scenes here
];

let randInt = (min,max) =>{
    return Math.floor((max-min)*Math.random()+min);
};

function randScene(scene) {
    
    scene.scene.start(
        events[randInt(0,events.length)].key, //Gets random scene's key
        scene.stats //Gives the stats object to pass into the next scene
        );

}