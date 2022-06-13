const AppInit = 
{
    init:function()
    {
        console.log("App starting...");

        //app.renderer.backgroundColor = 0xdaeffd;
        app.renderer.backgroundColor = 0x000000;

        if(window.innerWidth > window.innerHeight * 1.6)
        {
            //app.renderer.resize(window.innerHeight * 1.6, window.innerHeight);
            app.renderer.view.style.left = (window.innerWidth - window.innerHeight * 1.6) / 2 + "px";
            //console.log("The width is bigger");
            _canvasWidth = window.innerHeight * 1.6;
            _canvasHeight = window.innerHeight;
        }
        else
        {
            //app.renderer.resize(window.innerWidth, window.innerWidth / 1.6);
            app.renderer.view.style.top = (window.innerHeight - window.innerWidth/1.6) / 2 + "px";
            //console.log("The height is bigger");
            _canvasWidth = window.innerWidth;
            _canvasHeight = window.innerWidth / 1.6;
        }
        
        app.renderer.resize(_canvasWidth, _canvasHeight);

        _velocityNormalizer = _canvasWidth / 100;

        app.renderer.view.style.position = "absolute";
        document.body.appendChild(app.view);
    }
}