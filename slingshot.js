class Slingshot {

constructor(body1,body2) {
var options = {
    bodyA: body1,
    bodyB: body2,
    length: 65,
    stiffness: 1
  }
  this.sling = Constraint.create(options);

  World.add(myWorld,this.sling);
}
display() {
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}


}