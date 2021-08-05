class Background{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
    }
this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world,this.body);
this.image = loadImage("Jungle Map/Background/Background_01.png");
    }
   display(){
   imageMode(CENTER);
   var pos = this.body.position;
   image(this.image, 400,200, 800,400)
   } 
}