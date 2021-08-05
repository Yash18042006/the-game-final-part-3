class Mage{
    constructor(x,y,w,h){
        var options ={
            isStatic: false
    }
this.body = Bodies.rectangle(x,y,40,40,options);
this.w = 40;
this.h = 40;
World.add(world,this.body);
this.image = loadImage("Mage/idle/idle1.png")
    }
   display(){
   imageMode(CENTER);
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   rotate(this.body.angle)
   image(this.image, 0, 0, this.w, this.h);
   pop();
   } 
}

