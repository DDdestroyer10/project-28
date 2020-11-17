class Tree{
 
    constructor(x,y,width,height){
   var options = {
       isStatic: true
   }
   this.Image = loadImage("tree.png")
   this.body = Bodies.rectangle(x,y,width,height, options);
   this.width = width;
   this.height = height;
   World.add(world, this.body);
       }
   
    display() {
   
   var pos = this.body.position;
   
   imageMode(CENTER);
   image(this.Image,pos.x, pos.y, this.width, this.height);
       }
   }