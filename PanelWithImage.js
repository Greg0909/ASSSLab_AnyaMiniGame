class PanelWithImage
{
    constructor(x, y, relativeSize, imagePath)
    {
        this.container = new Container();
        this.sprite = new Sprite(TextureCache[imagePath]);
        this.sprite.anchor.set(0.5,0.5);
        let newScale = (_canvasHeight * relativeSize) / this.sprite.height;
        this.sprite.scale.set(newScale);
        this.container.addChild(this.sprite);

        this.container.x = x;
        this.container.y = y;

        _layers[_playerLayer].addChild(this.container);
    }
}