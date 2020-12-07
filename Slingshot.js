class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200, 20)
        image(this.sling2,170, 20)
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push()
            strokeWeight(10);
            stroke(48, 23, 7);
            if(posA.x<220){
                line(posA.x-20, posA.y, posB.x-10, posB.y);
                line(posA.x-20, posA.y, posB.x+25, posB.y)
                image(this.sling3,posA.x-30, posA.y-15, 15, 30)
            }else{
            line(posA.x+20, posA.y, posB.x-10, posB.y);
            line(posA.x+20, posA.y, posB.x+25, posB.y)
            image(this.sling3,posA.x+25, posA.y-14, 15, 30)
            }
            pop()
        }
    }
    
}