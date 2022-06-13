const WinScene1 = 
{
    Start:function()
    {
        WinScene1.fadeInAndFadeOut = new FadeInAndOut(1);
        WinScene1.fadeInAndFadeOut.FadeIn();

        WinScene1.goMainMenuButton = new Button(0.1, _canvasWidth*0.5, _canvasHeight*0.9, "./Images/MainMenuButton.png", "", ()=>WinScene1.fadeInAndFadeOut.FadeOut(() => CurrentScene.ChangeScene(MainMenu)));
        WinScene1.goMainMenuButton.container.visible = false;

        WinScene1.youWonMessageSprite = new Sprite(TextureCache["./Images/YouWonMessage.png"]);
        WinScene1.youWonMessageSprite.visible = false;
        WinScene1.youWonMessageSprite.anchor.set(0.5,0.5);
        let newScale = (_canvasHeight * 0.4) / WinScene1.youWonMessageSprite.height;
        WinScene1.youWonMessageSprite.scale.set(newScale);

        WinScene1.youWonMessageSprite.x = _canvasWidth*0.5;
        WinScene1.youWonMessageSprite.y = _canvasHeight*0.15;

        _layers[_interactableLayer].addChild(WinScene1.youWonMessageSprite);

        WinScene1.winAnimation = new OneTimeAnimation("./runningcat.json", "runnincat", 8, ()=>WinScene1.ShowYouWin());
        WinScene1.winAnimationSprite = new Sprite();
        WinScene1.winAnimationSprite.width = _canvasWidth;
        WinScene1.winAnimationSprite.height = _canvasHeight;

        _layers[_interactableLayer].addChild(WinScene1.winAnimationSprite);

        _database.ref("Win/Play_" + _replayNumber + "/" + _identifier).set(GetTodaysDate());
    },

    Update:function(delta)
    {
        WinScene1.fadeInAndFadeOut.Update(delta);

        timer_40ms += delta;

        if(timer_40ms > 8)
        {

            WinScene1.winAnimationSprite.texture = WinScene1.winAnimation.NextFrame();
            timer_40ms = 0;
        }
        
    },

    ShowYouWin:function()
    {
        console.log("YOU WIN!!");
        setTimeout(() => {
            WinScene1.goMainMenuButton.container.visible = true;
            WinScene1.youWonMessageSprite.visible = true;
        }, 1000);
    }
}