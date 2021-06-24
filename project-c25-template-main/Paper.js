class Paper{
    constructor(x,y,width,height){
    var options={
    restitutuion:1.0,
    density:0.4,
    friction:0.6
    
    
    }
    this.image=loadImage("paper.png")
    this.body=Bodies.rectangle(x,y,width,height,options)
    
    this.body.width=width
    this.body.height=height
    World.add(world,this.body)
    
    }
    display(){
    
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    
    imageMode(CENTER)
    image(this.image,0,0,80,80)
    pop()
    
    }
    
    }

















