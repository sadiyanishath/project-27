class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:7.8
          
        
      };
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius
      World.add(world, this.body);
    };
    display(){
      fill ("red")
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
      ellipseMode ("radius")
    };
  };