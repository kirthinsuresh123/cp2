class Paper{
    constructor(x,y,r){
        var options  = {
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2,        
        }
        this.paper = Bodies.circle(x,y,r/2,options);
        this.image = loadImage("paper.png");
        this.r = r;
        World.add(world,this.paper);
     

    }
    display(){
        var pos = this.paper.position
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        strokeWeight(3);
        fill("white");
        image(this.image,0,0,this.r,this.r)
       // ellipse(0,0,this.r,this.r);
        pop()
    }
}