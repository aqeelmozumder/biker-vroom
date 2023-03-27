var config = {
    type: Phaser.WEBGL,
    width: 700,
    height: 550,
    backgroundColor: 0x9b2271, //0x6E2663
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    autoCenter: true,
    scale:{
        mode: Phaser.Scale.NONE,
        parent: "game",
        width: 720,
        height: 550,
    }
}


window.onload = function(){

var game = new Phaser.Game(config);



}

