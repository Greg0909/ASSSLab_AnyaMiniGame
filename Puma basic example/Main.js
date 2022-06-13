AppInit.init();

CurrentScene.Update = Level_1.Update;

_player = new Player();

GameSetup.Update = CurrentScene.Update;

Loader.onFinishLoadingDo = GameSetup.Start;

Loader.loadAssets();

