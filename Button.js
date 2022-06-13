class Button
{
    constructor(relativeSize, x, y, imagePathIdle, imagePathPressed, onPointerUp)
    {
        this.container = new Container();
        this.sprite = new Sprite(TextureCache[imagePathIdle]);
        this.sprite.anchor.set(0.5,0.5);
        let newScale = (_canvasHeight * relativeSize) / this.sprite.height;
        this.sprite.scale.set(newScale);
        this.container.addChild(this.sprite);

        this.container.x = x;
        this.container.y = y;

        this.container.buttonMode = true;
        this.container.interactive = true;
        this.container.on("pointerdown", () => onPointerUp());

        _layers[_playerLayer].addChild(this.container);
    }
}