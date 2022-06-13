class Coin
{
    constructor(x, y)
    {
        this.container = new Container();
        this.coinAnimation = new BasicAnimation("./Images/Moneda.json", "Moneda", 1);
        this.currentSprite = new Sprite(this.coinAnimation.NextFrame());
        this.currentSprite.anchor.set(0.5,0.5);
        let coinScale = (_canvasHeight * 0.10) / this.currentSprite.height;
        this.currentSprite.scale.set(coinScale);

        this.circle = new Graphics();
        this.circle.beginFill(0xff1ef7, 0.5);
        this.circle.drawCircle(0, 0, coinScale * 100);
        this.circle.endFill();

        this.container.addChild(this.circle);
        this.container.addChild(this.currentSprite);   

        //app.stage.addChild(this.coinContainer);
        _layers[_interactableLayer].addChild(this.container);

        this.container.x = x;
        this.container.y = y;
    }

    NextFrame()
    {
        this.currentSprite = this.coinAnimation.NextFrame();
    }

    Advance(x)
    {
        this.container.x += x;
    }

    GetX()
    {
        return this.container.x;
    }

    Delete()
    {
        //app.stage.removeChild(this.coinContainer);
        _layers[_interactableLayer].removeChild(this.container);
    }
}