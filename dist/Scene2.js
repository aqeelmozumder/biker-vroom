class Scene2 extends Phaser.Scene{

    constructor(){

        super("PlayGame")
    }

    preload(){


   // this.load.bitmapFont("desyrel", "assets/font/font.png", "assets/font/font.xml" )
        this.load.image("Fuel", "assets/images/Fuel.png");
        this.load.image("Leftlane", "assets/images/Platform.png");
        this.load.image("Rightlane", "assets/images/Platform.png");
        this.load.image("Roadblock", "assets/images/RoadBlock.png");
        this.load.image("Roadlines", "assets/images/Roadlines.png");
        this.load.image("Platform", "assets/images/Platform.png");
       // this.load.image("TopBiker", "assets/images/Bikertop.png");
        this.load.image("biker", "assets/images/Biker.png");


    }
    create(){


       // var biker = this.physics.add.image(400, 100, 'biker');
       this.background = this.add.image(0,0, "background")
        this.background.setOrigin(0,0)
        //var roadblock = this.physics.add.image(400, 100, 'Roadblock');
       // this.add.text(20,20, "Now we are playin the game", {font: "25px Arial", fill: "red"})
       
       this.biker = this.add.image(config.width/2 , 380, "biker")
     // this.biker = this.add.sprite(200, 200, 'biker');

     // this.biker.setCollideWorldBounds(true);
    //     biker.setScale(0.35)
    //     roadblock.setScale(0.35)
    //     roadblock.setSize(200,200,300,50)
    //     // roadblock.body.offset.x =  50;
    //     // roadblock.body.offset.y = 100;
    //     // roadblock.body.width = roadblock.width;
    //     // roadblock.body.height = roadblock.height;

    //  biker.setVelocity(100, 200);
    //  biker.setBounce(1, 1);
    //  biker.setCollideWorldBounds(true);

    //  roadblock.setVelocity(100, 200);
    //  roadblock.setBounce(1, 1);
    //  roadblock.setCollideWorldBounds(true);

    //  this.physics.add.overlap(biker, oadblock1, this.collide, null, this);

    }



   update(){
   
    this.biker.x += 6;

    if(this.biker.x > config.width-100){

        this.biker.flipX = true;
        this.biker.x -= 6;
        const helloButton = this.add.text(config.width/2 - 150, 450, 'Click Here to Start the Game', { fill: '#fff' });
        helloButton.setInteractive();
        
        helloButton.on('pointerdown', () => { this.scene.start("GameScreen"); });
    }
    

   }

}

