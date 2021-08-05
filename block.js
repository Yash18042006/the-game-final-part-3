class Block{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
    }
this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world,this.body);
this.image = loadImage("Jungle Map/Platformer/Ground_02.png");
    }
   display(){
   imageMode(CENTER);
   var pos = this.body.position;
   image(this.image, pos.x, pos.y, this.w, this.h);
   } 
}