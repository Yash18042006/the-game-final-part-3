class Knight{
    constructor(x,y,w,h){
        var options ={
            isStatic: false
    }
this.body = Bodies.rectangle(x,y,45,45,options);
this.w = 45;
this.h = 45;
World.add(world,this.body);
this.image = loadImage("Knight/idle/idle1.png")

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
