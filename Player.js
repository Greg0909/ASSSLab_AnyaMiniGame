class Player
{
    constructor()
    {
        this.playerCircle = new Graphics();
        this.playerContainer = null;
        this.runningAnimation = new BasicAnimation("./runningcat.json", "runnincat", 8);

        this.currentAnimation = this.runningAnimation;
        this.currentSprite = null;
        this.xVelocity = 0;

        this.lives = 3;
    }

    Start() 
    {
        this.playerContainer = new Container();

        this.currentSprite = new Sprite(resources["./runningcat.json"].textures["runnincat_1.png"]);
        this.currentSprite.anchor.set(0.5,0.5);
        let playerScale = (_canvasHeight * 0.3) / this.currentSprite.height;
        this.currentSprite.scale.set(playerScale);
        
        this.playerCircle.beginFill(0xff1ef7, 0.5);
        this.playerCircle.drawCircle(0, 0, playerScale*160);
        this.playerCircle.endFill();

        this.playerContainer.addChild(this.playerCircle);
        this.playerContainer.addChild(this.currentSprite);
        this.playerContainer.y = _canvasHeight * 0.95 - this.currentSprite.height/2 + this.currentSprite.height*0.025;
        this.playerContainer.x = _canvasWidth * 0.25;

        //app.stage.addChild(this.playerContainer);
        _layers[_playerLayer].addChild(this.playerContainer);

        const left = Keyboard.getKeyObject("ArrowLeft"),
        right = Keyboard.getKeyObject("ArrowRight");

        left.press = this.LeftArrowPress;
        left.release = this.LeftArrowRelease;

        right.press = this.RightArrowPress;
        right.release = this.RightArrowRelease;
    }

    LeftArrowPress()
    {
        _player.xVelocity = -1;
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
        _player.xVelocity = 1;
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
        // this.currentSprite.x += this.xVelocity * delta;

        // if(this.xVelocity> 0)
        // {
        //     this.currentSprite.scale.x = 1;
        // }
        // else if( this.xVelocity < 0)
        // {
        //     this.currentSprite.scale.x = - 1;
        // }

        this.playerContainer.x += this.xVelocity * delta * _velocityNormalizer;

        if(this.xVelocity> 0)
        {
            this.playerContainer.scale.x = 1;
        }
        else if( this.xVelocity < 0)
        {
            this.playerContainer.scale.x = - 1;
        }
    }

    NextFrame()
    {
        this.currentSprite.texture = this.currentAnimation.NextFrame();
    }

    LossLife(damage)
    {
        this.lives-= damage;
    }

    IsDead()
    {
        return this.lives == 0;
    }
}