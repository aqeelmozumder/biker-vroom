class Scene1 extends Phaser.Scene{

    constructor(){

        super("StartGame")
    }

    preload(){

        this.load.image("background", "assets/images/Gamepage.png");
        this.load.image("biker", "assets/images/Biker.png");
        
    }

    create(){

        this.add.text(20,20, "Loading Game.....")
       // background = this.add.tileSprite(0, 0, 800, 600, 'background');
       // button = this.add.button( 100, 400, 'button', actionOnClick, this, 2, 1, 0);
        
       this.scene.start("PlayGame")

    /*button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    */


    }

   

}
