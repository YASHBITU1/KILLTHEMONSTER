class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
        
       
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
   
   show(){
   
            var pointA = this.Chain.bodyA.position;
            var pointB = this.Chain.bodyB.position;
     
                strokeWeight(5);
                stroke(0);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}