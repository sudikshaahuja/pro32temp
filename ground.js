class ground{
    constructor(x,y,width,height){
        var options = {
            
            


        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }

    display(){
        var positions = this.body.position

        
        rect(positions.x,positions.y,this.width,this.y)
    }
}