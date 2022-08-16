class HELICOP{
    constructor(x,y,width, height, HELICOPPos) {
        var options = {
            restitution : 0.8,
            friction: 1.0,
            density: 1.0
        };
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("./Assets/Helicopter.png");
        this.helicopPosition = heliopPos;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.helicopPosition, this.width, this.height);
        pop();
    }
}