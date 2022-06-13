const CurrentScene = 
{
    Start:function()
    {
        console.log("initialScene function should be overriten to an actual game scene like level_1"); // This function should be overriten to a game scene
    },
    Update:function(delta)
    {
        console.log("initialScene function should be overriten to an actual game scene like level_1"); // This function should be overriten to a game scene
    },
    ChangeScene(newScene)
    {
        for(let i=0; i<_numberOfLayers; i++)
        {
            app.stage.removeChild(_layers[i]);
            _layers[i] = new Container();
            app.stage.addChild(_layers[i]);
        }

        CurrentScene.Start = newScene.Start;
        newScene.Start();
        CurrentScene.Update = newScene.Update;
    }
}