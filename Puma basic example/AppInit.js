const AppInit = 
{
    init:function()
    {
        console.log("App starting...");

        app.renderer.backgroundColor = 0x23395D;

        app.renderer.resize(window.innerWidth, window.innerHeight);

        app.renderer.view.style.position = "absolute";
        document.body.appendChild(app.view);
    }
}