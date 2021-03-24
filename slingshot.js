class SlingShot{
    constructor(){
        var options = {
            
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(20)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            
           
            
            pop();
        }
    }
    
}