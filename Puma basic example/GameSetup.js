const GameSetup =
{
    Update:function(delta)
    {
        console.log("gameLoop function should be overriten to an actual game loop like level_1"); // This function should be overriten to a game loop
    },

    Start:function()
    {
        console.log(TextureCache);
        
        _player.Start(app, resources);

        app.ticker.add((delta) => GameSetup.Update(delta));
    }
}