class Hero{
 constructor(x,y,r)   {
     var options = {
         density:1,
         frictionAir:1
     };
     this.x=x;
     this.y=y;
     this.r=r;
     this.image=loadImage("images/Superhero-01.png");
     this.body=Bodies.circle(this.x,this.y, (this.r)/2,options)
World.add(myWorld,this.body);
    }
show(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    pop();
}}                                                                            