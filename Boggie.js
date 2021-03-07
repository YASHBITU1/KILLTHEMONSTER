class Hero{
    constructor(x,y,r){
      var options ={
         density: 1,
         frictionAir: 1
      };
      this.x=x;
      
     
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/coach.png");
      Matter.Body.setMass(this.body,this.body.mass*5);
    }
    show()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  