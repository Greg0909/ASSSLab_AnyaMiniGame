const GameSetup =
{
    Start:function()
    {       
        CurrentScene.ChangeScene(MainMenu);

        app.ticker.add((delta) => CurrentScene.Update(delta));

        //app.renderer.backgroundColor = 0xdaeffd;
    }
}