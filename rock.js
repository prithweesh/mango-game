class Rock extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("images/stone.png");
    }
   
    display() {
    //  this.body.position.x = 234;
//this.body.position.y = 408;
      super.display();
      console.log(this.body.position);
    }
    
  }
  