class FadeInAndOut
{
    constructor(startAlpha=0)
    {
        this.blackRect = new Sprite(TextureCache["./Images/BlackRect.png"]);
        this.blackRect.width = _canvasWidth;
        this.blackRect.height = _canvasHeight;
        this.blackRect.alpha = startAlpha;
        _layers[_UILayer].addChild(this.blackRect);

        this.alpha = 1;

        this.fadeIn = false;
        this.fadeOut = false;
        this.onFadeOut = ()=>console.log("Please dont forget to pass as a parameter the function OnFadeOut");
    }

    FadeIn()
    {
        this.fadeIn = true;
        this.alpha = 1;
    }

    FadeOut(onFadeOut)
    {
        this.fadeOut = true;
        this.onFadeOut = onFadeOut;
        this.alpha = 0;
    }

    Update(delta)
    {
        if(this.fadeIn)
        {
            this.alpha -= delta * 0.01;
            this.alpha = this.alpha < 0? 0: this.alpha;
            this.blackRect.alpha = this.alpha;
            this.fadeIn = this.alpha != 0;
        }
        if(this.fadeOut)
        {
            this.alpha += delta * 0.01;
            this.alpha = this.alpha > 1? 1: this.alpha;
            this.blackRect.alpha = this.alpha;
            if( this.alpha == 1 )
            {
                this.fadeOut = true;
                this.onFadeOut();
            }
        }
    }
}