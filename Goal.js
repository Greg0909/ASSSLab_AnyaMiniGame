class Goal
{
    constructor()
    {
        this.container = new Container();
        this.defaultAnimation = new BasicAnimation("./Images/Goal.json", "Goal", 1);
        this.sprite = new Sprite(this.defaultAnimation.NextFrame());
        this.sprite.anchor.set(0.5,0.5);
        let newScale = (_canvasHeight * 0.10) / this.sprite.height;
        this.sprite.scale.set(newScale);

        // this.circle = new Graphics();
        // this.circle.beginFill(0xff1ef7, 0.5);
        // this.circle.drawCircle(0, 0, newScale * 100);
        // this.circle.endFill();

        //this.container.addChild(this.circle);
        this.container.addChild(this.sprite);
        
        this.isSpawned = false;
    }

    SpawnGoal()
    {
        this.container.x = _canvasWidth *3;
        this.container.y =  _canvasHeight * 0.70;

        //app.stage.addChild(this.coinContainer);
        _layers[_interactableLayer].addChild(this.container);

        this.isSpawned = true;
    }

    Update(delta)
    {
        if(!this.isSpawned)
        {
            return;
        }

        this.container.x += _globalVelocity*delta*_velocityNormalizer;
    }
}