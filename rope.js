class Rope{
    constructor(bodyA,bodyB){
            var options = {
                bodyA:bodyA.body,
                bodyB:bodyB.body,
                length:200,
                stiffness:0.11
             }

                rope=Constraint.create(options)
                
                World.add(world,rope)

                strokeWeight(3)
                line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)

         }
    }
    
    