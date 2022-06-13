const MainMenu =
{
    Start:function()
    {
        MainMenu.fadeInAndFadeOut = new FadeInAndOut(1);
        MainMenu.fadeInAndFadeOut.FadeIn();

        MainMenu.playButton = new Button(0.3, _canvasWidth*0.8, _canvasHeight*0.25, "./Images/PlayButton.png", "", ()=>MainMenu.shouldPlaySurpriseAttack=true);
        MainMenu.playButtonAnimation = new BasicAnimation("./Images/PlayButton.json", "PlayButton", 10);

        this.MainScreenImage = new Sprite(TextureCache["./Images/MainScreen.png"]);
        this.MainScreenImage.width = _canvasWidth;
        this.MainScreenImage.height = _canvasHeight;
        _layers[_backgroundF1].addChild(this.MainScreenImage);

        MainMenu.surpriseAttackAnimation = new OneTimeAnimation("./Images/SurpriseAttack.json", "SurpriseAttack", 3, MainMenu.PlayStartingCinematic);
        MainMenu.surpriseAttackSprite = new Sprite();
        MainMenu.surpriseAttackSprite.width = _canvasWidth;
        MainMenu.surpriseAttackSprite.height = _canvasHeight;
        MainMenu.shouldPlaySurpriseAttack = false;

        _layers[_playerLayer].addChild(MainMenu.surpriseAttackSprite);

        _replayNumber++;
        
        ResetGame();
    },

    Update:function(delta)
    {
        MainMenu.fadeInAndFadeOut.Update(delta);

        timer_40ms += delta;

        if(timer_40ms > 8)
        {
            MainMenu.playButton.sprite.texture = MainMenu.playButtonAnimation.NextFrame();
            if(MainMenu.shouldPlaySurpriseAttack)
            {
                MainMenu.surpriseAttackSprite.texture = MainMenu.surpriseAttackAnimation.NextFrame();
            }
            timer_40ms = 0;
        }
        
    },

    PlayStartingCinematic:function()
    {
        setTimeout(()=>
            MainMenu.fadeInAndFadeOut.FadeOut(() => CurrentScene.ChangeScene(Level_1))
        , 1500);
    }
}