class paper 
{
    
    constructor(x,y,r){
        var options ={
      isStatic:false,
      restitution:0.3,
      density:0.6,
     friction:0
        }
     this.x=x;
     this.y=y;
        this.r=r;
    this.image=loadImage("paper.png")
this.body=Bodies.circle(this.x, this.y,this.r/2,options);
World.add(world,this.body);


    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);

        image(this.image,0,0,this.r,this.r);
            pop();

    }
}