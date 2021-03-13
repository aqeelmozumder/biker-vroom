class Scene3 extends Phaser.Scene{

    constructor(){
        
        super("GameScreen")
    }
    
    
    create(){
        this.gameOver = false;
        this.score = 0
        this.i = 60;
        this.n =2;
        
        this.scoreLabel= this.add.text(617, 40, "SCORE: "+ this.score, {fontSize: '14px', fill: '#fff'});
        let keyA;
        let keyS;
        let keyD;
        let keyW;

        // this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        // this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.Platform1 = this.add.image(100,300, "Platform")
        this.Platform2 = this.add.image(600,300, "Platform")
       
        this.leftlane = this.add.image(250,300, "Leftlane")
        this.rightlane = this.add.image(450,300, "Leftlane")
       
        this.Roadlines1 = this.add.image(170,300, "Roadlines")
        this.Roadlines2 = this.add.image(330,300, "Roadlines")
        this.Roadlines3 = this.add.image(510,300, "Roadlines")
        
        this.Roadblock1 = this.add.sprite(160,200, "Roadblock")
        this.biker = this.add.sprite(330,500, "biker")
       
        this.physics.world.enable([this.Roadblock1,this.biker],Phaser.Physics.ARCADE)
        //([this.biker,this.Roadblock1], Phaser.Physics.ARCADE);
        this.biker.body.allowGravity = false;
        this.Roadblock1.body.allowGravity = false;
        //range1: 100 - 250
        //range2: 250-450
        //range3: 450-600



        this.Platform1.setScale(1.75)
        this.Platform2.setScale(1.75)
        this.leftlane.setScale(2)
        this.rightlane.setScale(2)
        this.Roadblock1.setScale(0.35)
        //this.Roadblock2.setScale(0.35)
        //this.Roadblock3.setScale(0.35)
        //this.fuel.setScale(0.35)
        this.biker.setScale(0.35)
       
        //this.biker.setVelocity(0, 0);

        this.Roadblock1.setSize(200,200,300,50)

        this.biker.setSize(50,50,10,50)
       
        
       
        

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
          });

          
         

    }

      
   collide(biker, roadblock){
        //console.log("why")
        biker.destroy();
        this.gameOver = true;
        
    }

    speedManager(speed){
        this.moveRoadBlock1(this.Roadblock1, speed)

        this.time.now + 20000
        this.moveRoadlines(this.Roadlines1, speed)
        this.moveRoadlines(this.Roadlines2, speed)
        this.moveRoadlines(this.Roadlines3, speed)
        

    }

    
     moveRoadlines(roadlines, speed){
        roadlines.y += speed;
       
        if(roadlines.y > config.height + 100){
            this.resetRoadlinesPos(roadlines);
            
        }
    }

     resetRoadlinesPos(roadlines){

        roadlines.y =0;

        this.score += 5
        this.scoreLabel.setText('Score: ' + this.score)
        //var randomX = Phaser.Math.Between(0, config.width);
        //roadlines.x = randomX;

    }


     moveRoadBlock1(roadblock, speed){
        roadblock.y += speed;
       
        if(roadblock.y > config.height + 100){
            
            this.resetRoadblock1Pos(roadblock);
        }
    }

     resetRoadblock1Pos(roadblock){

        //roadblock.y =0;
        
        var randomY = Phaser.Math.Between(0, 200);
        roadblock.y = randomY;
        
        var array = [160, 332, 510]
        roadblock.x = array[Math.floor(Math.random() * array.length)]

    }

    

   update(){

    
   this.physics.add.overlap(this.biker, this.Roadblock1, this.collide, null, this);
   
        
       
    if(this.input.keyboard.checkDown(this.cursors.left, 250)) {
       
        if(this.biker.x == 330){
            this.biker.x = 160
       
        }
        else if(this.biker.x == 510){
            this.biker.x = 330
         
        }
     } else if(this.input.keyboard.checkDown(this.cursors.down, 250)) {
        console.log('S key pressed')
     } else if(this.input.keyboard.checkDown(this.cursors.right, 250)) {
        if(this.biker.x == 330){
            this.biker.x = 510
            
            }
        else if(this.biker.x == 160){
                this.biker.x = 330
             
        }
     } else if(this.input.keyboard.checkDown(this.cursors.up, 250)) {
        console.log('W key pressed')
     }


    if(this.gameOver == false){

       

        if(this.score <this.i){
            this.speedManager(this.n)

        }
        else if(this.score >= this.i){
            this.n += 2
            this.i += 60;
            this.speedManager(this.n)
            
        }
       
    
    
    }
    else{

        const end = this.add.text(config.width/2 -45, config.height/2, 'Game Over', { fill: '#fff' });
        const endscore = this.add.text(config.width/2 -100, config.height/2 + 50, 'Your Score is: ' + this.score, { fill: '#00cd00' });
        //end.setInteractive();
        this.game.destroy()

    }


    


    

   }

}

