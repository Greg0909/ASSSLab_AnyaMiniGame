const Loader =
{
    onFinishLoadingDo:function() {
        console.log("onFinishLoadingDo function should be overriten to a setup"); // This function should be overriten to a setup
    },

    loadAssets:function()
    {
        loader
            .add("./runningcat.json")
            .add("./runningcat.png")
            .load(Loader.onFinishLoadingDo);
    }
}