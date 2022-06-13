class Player
{
    constructor()
    {
        this.playerContainer = null;
        this.runningAnimation = new BasicAnimation("runningcat", "runnincat", 8);

        this.currentAnimation = this.runningAnimation;
        this.currentSprite = null;
        this.xVelocity = 0;
    }

    Start(app, resources) 
    {
        this.playerContainer = new Container();

        this.currentSprite = new Sprite(resources["./runningcat.json"].textures["runnincat_1.png"]);
        this.currentSprite.anchor.set(0.5,0.5);
        this.currentSprite.y = 100;

        this.playerContainer.addChild(this.currentSprite);

        app.stage.addChild(this.playerContainer);

        const left = Keyboard.getKeyObject("ArrowLeft"),
        right = Keyboard.getKeyObject("ArrowRight");

        left.press = this.LeftArrowPress;
        left.release = this.LeftArrowRelease;

        right.press = this.RightArrowPress;
        right.release = this.RightArrowRelease;
    }

    LeftArrowPress()
    {
        _player.xVelocity = -8;
    }

    LeftArrowRelease()
    {
        if(_player.xVelocity < 0) 
        {
            _player.xVelocity = 0;
        }
    }

    RightArrowPress()
    {
        _player.xVelocity = 8;
    }

    RightArrowRelease()
    {
        if(_player.xVelocity > 0) 
        {
            _player.xVelocity = 0;
        }
    }

    Update(delta)
    {
        this.currentSprite.x += this.xVelocity * delta;

        if(this.xVelocity> 0)
        {
            this.currentSprite.scale.x = 1;
        }
        else if( this.xVelocity < 0)
        {
            this.currentSprite.scale.x = - 1;
        }
    }

    NextFrame()
    {
        this.currentSprite.texture = this.currentAnimation.NextFrame();
    }
}