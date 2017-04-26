namespace AudioManager {
    //Create an AudioListener and add it to the camera
    let listener = new THREE.AudioListener();

    //Load a sound and set it as the PositionalAudio object's buffer
    let audioLoader = new THREE.AudioLoader();

    //Create the PositionalAudio object (passing in the listener)
    let sound: THREE.PositionalAudio;

    export function init(camera: THREE.Camera) {
        camera.add(listener);

        listener.setMasterVolume(80);

        sound = new THREE.PositionalAudio(listener);
        audioLoader.load('sounds/PROP1.WAV', (buffer: THREE.AudioBuffer) => {
            sound.setBuffer(buffer);
            sound.setRefDistance(20);
            sound.setLoop(true);
            sound.play();
        }, () => { }, () => { });


        //var sound4 = new THREE.Audio(listener);
        //audioLoader.load('sounds/358232_j_s_song.mp3', (buffer: THREE.AudioBuffer) => {
        //    sound4.setBuffer(buffer);
        //    sound4.setLoop(true);
        //    sound4.setVolume(0.5);
        //    sound4.play();
        //}, () => { }, () => { });

    }

    export function getSound() {
        return sound;
    }
}