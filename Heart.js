class Heart
{
    constructor(x, y)
    {
        this.container = new Container();
        this.animation = new BasicAnimation("./Images/Heart.json", "Heart", 1);
        this.sprite = new Sprite(this.animation.NextFrame());
        this.sprite.anchor.set(0.5,0.5);
        let scale = (_canvasHeight * 0.10) / this.sprite.height;
        this.sprite.scale.set(scale);

        this.container.addChild(this.sprite);   

        //app.stage.addChild(this.container);
        _layers[_UILayer].addChild(this.container);

        this.container.x = x;
        this.container.y = y;

        this.isBeingDeleted = false;
        this.isDeleted = false;
        this.TempAnimation_blinkIndex = 0;
    }

    Delete()
    {
        this.isBeingDeleted = true;
    }

    NextFrame()
    {
        if(this.isBeingDeleted)
        {        
            this.sprite.visible = !this.sprite.visible;
            this.TempAnimation_blinkIndex++;

            if(this.TempAnimation_blinkIndex >= 6)
            {
                this.sprite.visible = false;
                this.isDeleted = true;
            }
        }
    }
}