class Bob 
{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:2

        }
        this.body=Bodies.circle(x,y,20,options)
        World.add(world,this.body)
    }
    display()
    {
        push()
        ellipseMode(RADIUS)
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();

    }
}