class InfiniteRepetition
{
    constructor(containerA, containerB)
    {
        this.containerA = containerA;
        this.containerB = containerB;
        this.xVelocity = 1;
        this.yVelocity = 0;
    }

    Update(delta)
    {
        this.containerA.x += this.xVelocity * _globalVelocity * delta * _velocityNormalizer;
        this.containerB.x += this.xVelocity * _globalVelocity * delta * _velocityNormalizer;

        this.containerA.y += this.yVelocity * delta * _velocityNormalizer;
        this.containerB.y += this.yVelocity * delta * _velocityNormalizer;

        let globalPositionContainerA = this.containerA.getGlobalPosition();
        if(globalPositionContainerA.x + this.containerA.width < 0)
        {
            // transport container A to the back of container B 
            this.containerA.x = this.containerB.x + this.containerB.width;
        }

        let globalPositionContainerB = this.containerB.getGlobalPosition();
        if(globalPositionContainerB.x + this.containerB.width < 0)
        {
            // transport container B to the back of container A
            this.containerB.x = this.containerA.x + this.containerA.width;
        }

        // TODO: Implement for Y movement
    }
}