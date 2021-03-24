class ball{
    constructor(){
        var options = {
           
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world,this.body)
    }

    display(){

        var position  =this.body.position
        ellipse(position.x,position.y,this.radius,)
    }
}