class HeartManager
{
    constructor()
    {
        this.hearts = [];
        this.hearts.push( new Heart(_canvasWidth*0.80, _canvasHeight*0.1) );
        this.hearts.push( new Heart(_canvasWidth*0.87, _canvasHeight*0.1) );
        this.hearts.push( new Heart(_canvasWidth*0.94, _canvasHeight*0.1) );
        this.heartIndex = 0;
    }

    LossHeart()
    {
        if(this.hearts.length == 0)
        {
            return;
        }

        this.hearts[this.heartIndex].Delete();
        this.heartIndex++;
    }

    NextFrame()
    {
        this.hearts.forEach((heart)=>
        {
            if(!heart.isDeleted)
            {
                heart.NextFrame();
            }
        });
    }
}