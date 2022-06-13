const Loader =
{
    onFinishLoadingDo:function() {
        console.log("onFinishLoadingDo function should be overriten to a setup"); // This function should be overriten to a setup
    },

    loadAssets:function()
    {
        loader
            .add("./runningcat.json")
            .add("./Images/floorLayer1.png")
            .add("./Images/Edificios.png")
            .add("./Images/Park.png")
            .add("./Images/Clouds.png")
            .add("./Images/Moneda.json")
            .add("./Images/Heart.json")
            .add("./Images/Goal.json")
            .add("./Images/BlackRect.png")
            .add("./Images/MainScreen.png")
            .add("./Images/PlayButton.json")
            .add("./Images/PlayButton.png")
            .add("./Images/SurpriseAttack.json")
            .add("./Images/InstructionPanel.png")
            .add("./Images/OKButton.png")
            .add("./Images/MainMenuButton.png")
            .add("./Images/YouWonMessage.png")
            .load(Loader.onFinishLoadingDo);
    }
}