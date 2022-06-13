class BasicAnimation
{
    constructor(atlasName, animationName, numberOfFrames)
    {
        this.atlasName = atlasName;
        this.animationName = animationName;
        this.numberOfFrames = numberOfFrames;
        this.frameIndex = 1;
    }

    NextFrame()
    {
        let texture = resources[`./${this.atlasName}.json`].textures[`${this.animationName}_${this.frameIndex}.png`];
        this.frameIndex = (this.frameIndex % this.numberOfFrames) + 1;

        return texture;
    }
}