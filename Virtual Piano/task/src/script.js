document.addEventListener("keydown", function (event) {

    if (event.code === "KeyA" ||
        event.code === "KeyS" ||
        event.code === "KeyD" ||
        event.code === "KeyF" ||
        event.code === "KeyG" ||
        event.code === "KeyH" ||
        event.code === "KeyJ" ||
        event.code === "KeyW" ||
        event.code === "KeyE" ||
        event.code === "KeyT" ||
        event.code === "KeyY" ||
        event.code === "KeyU") { play(event.key); }
    else { console.log(""); }
});

function play(sound) {
    let audio = new Audio(sound.toUpperCase() +".mp3");
    audio.play();
}
