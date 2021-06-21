class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }      
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);        
        World.add(world, this.body);  
        this.image = loadImage("iron nail.jpg")
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);        
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}
