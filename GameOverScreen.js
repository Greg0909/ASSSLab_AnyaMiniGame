class GameOverScreen
{
    constructor(parentFadeInAndOut)
    {
        this.fadeInAndFadeOut = parentFadeInAndOut;

        //this.container = new Container();

        this.coinTest = new Coin(_canvasWidth*0.5, _canvasHeight*0.5);
        this.coinTest.container.buttonMode = true;
        this.coinTest.container.interactive = true;
        this.coinTest.container.visible = false;
        this.coinTest.container.on("pointerdown", ()=>this.ButtonDown_ReturnToMainMenu(this));
    }

    Display()
    {
        this.coinTest.container.visible = true;
    }

    Hide()
    {
        this.coinTest.container.visible = false;
    }

    ButtonDown_ReturnToMainMenu(local)
    {
        console.log("Going to Main menu");
        local.fadeInAndFadeOut.FadeOut(()=>CurrentScene.ChangeScene(MainMenu));
    }
}