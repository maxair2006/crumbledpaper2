
class Ball{
    constructor(x,y){
      var options={
          restitution : 0.3,
          friction:0.5,
          density:1.2,
      } 
      this.body=Bodies.circle(x,y,20,options);
      this.color=color(random(0,250),random(0,250),random(0,250))
      World.add(world,this.body);
      this.image= loadImage("paper.png")
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill(this.color);
        imageMode(CENTER);
        image(this.image,0,0,40,40)
        pop()
    }
   
   
   }