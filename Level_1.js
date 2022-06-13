const Level_1 =
{
    Start:function()
    {
        Level_1.fadeInAndFadeOut = new FadeInAndOut(1);
        Level_1.fadeInAndFadeOut.FadeIn();
   
        Level_1.CreateBackground();

        Level_1.coinManager = new CoinManager();
        Level_1.coinManager.OnCoinMiss = Level_1.OnCoinMiss;

        _player = new Player();
        _player.Start(app, resources);

        _layers[_groundLayer].buttonMode = true;
        _layers[_groundLayer].interactive = true;
        _layers[_groundLayer].on("pointerdown", () =>Level_1.TryToConsumeCoin(Level_1));

        Level_1.heartManager = new HeartManager();
        Level_1.goal = new Goal();
        
        Level_1.gameOverScreen = new GameOverScreen(Level_1.fadeInAndFadeOut);
        Level_1.showingInstructions = true;

        Level_1.instructions = new Instructions(()=>Level_1.showingInstructions=false);
    },

    Update:function(delta)
    {

        timer_40ms += delta;

        if(timer_40ms > 8)
        {
            timer_40ms = 0;
            if(!_gameover)
            {
                _player.NextFrame();
                Level_1.coinManager.NextFrame();
            }
            Level_1.heartManager.NextFrame();
        }

        Level_1.fadeInAndFadeOut.Update(delta);

        if(!_gameover)
        {
            _player.Update(delta);

            if(!Level_1.showingInstructions)
            {
                Level_1.coinManager.Update(delta);
            }
            Level_1.cloudsInfiniteLoop.Update(delta);
            Level_1.edificiosInfiniteLoop.Update(delta);
            Level_1.parkInfiniteLoop.Update(delta);
            Level_1.goal.Update(delta);
            
            // Spawn the goal if the coin manager finished to spawn all the coins
            if(Level_1.coinManager.finish && !Level_1.goal.isSpawned)
            {
                Level_1.goal.SpawnGoal();
            }

            // If the player is near the goal
            if(Level_1.goal.isSpawned && Level_1.goal.container.x - _canvasWidth*0.5 <= _player.playerContainer.x )
            {                
                Level_1.OnWin(delta);
            }
        }
    },

    TryToConsumeCoin:function()
    {
        if(_gameover)
        {
            return;
        }

        Level_1.coinManager.TryToConsumeCoin();
    },

    OnCoinMiss()
    {
        _player.LossLife(1);
        Level_1.heartManager.LossHeart();

        console.log(`current player lives: ${_player.lives}`);
        if(_player.IsDead())
        {
            console.log("GAME OVER");
            _database.ref("GameOver/Play_" + _replayNumber + "/" + _identifier).set(GetTodaysDate());
            _globalVelocity = 0;
            _gameover = true;
            Level_1.gameOverScreen.Display();
        }
    },

    CreateBackground()
    {
        Level_1.cloudsInfiniteLoop = Level_1.CreateInfiniteLoopBackgroundImage("./Images/Clouds.png", _backgroundF2);
        Level_1.cloudsInfiniteLoop.xVelocity = 0.1;

        Level_1.edificiosInfiniteLoop = Level_1.CreateInfiniteLoopBackgroundImage("./Images/Edificios.png", _backgroundF1);
        Level_1.edificiosInfiniteLoop.xVelocity = 0.75;

        Level_1.parkInfiniteLoop = Level_1.CreateInfiniteLoopBackgroundImage("./Images/Park.png", _groundLayer);
        Level_1.parkInfiniteLoop.xVelocity = 1;
    },

    CreateInfiniteLoopBackgroundImage(imagePath, layerNumber)
    {
        let backgroundA = new Sprite(TextureCache[imagePath]);
        let backgroundB = new Sprite(TextureCache[imagePath]);

        let newScale = _canvasHeight / backgroundB.height;
        backgroundA.scale.set(newScale);
        backgroundB.scale.set(newScale);

        backgroundA.height = _canvasHeight;
        backgroundB.height = _canvasHeight;

        let backgroundContainerA = new Container();
        let backgroundContainerB = new Container();

        backgroundContainerA.addChild(backgroundA);
        backgroundContainerB.addChild(backgroundB);

        backgroundContainerB.x = backgroundContainerA.x + backgroundContainerA.width;

        _layers[layerNumber].addChild(backgroundContainerA);
        _layers[layerNumber].addChild(backgroundContainerB);

        return new InfiniteRepetition(backgroundContainerA, backgroundContainerB);
    },

    OnWin(delta)
    {
        _globalVelocity = _globalVelocity <= -0.1 ? -0.1: _globalVelocity-0.5*delta;
        if(!Level_1.fadeInAndFadeOut.fadeOut)
        {
            Level_1.fadeInAndFadeOut.FadeOut(() => CurrentScene.ChangeScene(WinScene1));
        }
    }
}