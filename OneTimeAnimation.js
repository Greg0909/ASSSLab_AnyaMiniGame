class OneTimeAnimation
{
    constructor(atlasName, animationName, numberOfFrames, onFinish)
    {
        this.animation = new BasicAnimation(atlasName, animationName, numberOfFrames);
        this.onFinish = onFinish;
        this.lastFrame = null;
        this.finish = false;
    }

    NextFrame()
    {
        if(this.finish)
        {
            return this.lastFrame;
        }

        // If the animation ended
        if(this.animation.frameIndex == this.animation.numberOfFrames)
        {
            this.onFinish();
            this.finish = true;
            this.lastFrame = this.animation.NextFrame();
            return this.lastFrame;
        }

        this.lastFrame = this.animation.NextFrame();
        return this.lastFrame;
    }
}