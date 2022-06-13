//Aliases
const Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.Loader.shared,
    resources = PIXI.Loader.shared.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Graphics = PIXI.Graphics,
    app = new Application();

let _player,
    _database = firebase.database(),
    _identifier,
    _replayNumber = 0,
    timer_40ms = 0.0,
    playerSprite,
    _canvasWidth,
    _canvasHeight,
    _velocityNormalizer,
    _globalVelocity = -0.20,
    _gameover = false,
    _layers = [],
    
    // The layers go from the thigs on top to the things on the back
    _numberOfLayers = 10;
    _UILayer = 9,
    _playerLayer = 6,
    _interactableLayer = 5,
    _groundLayer = 4,
    _backgroundF1 = 3,
    _backgroundF2 = 2;


const ResetGame =()=>
{
    _globalVelocity = -0.20;
    _gameover = false;
    _layers = [];
    timer_40ms = 0.0;
}