class CoinManager
{
    constructor()
    {
        this.timeAcum = 0;
        this.timeIntervalForNextCoin = 200;
        this.coinArray = [];
        this.coinStartYPosition = _canvasHeight * 0.85;
        this.coinSTartXPosition = _canvasWidth *1 + _canvasHeight*0.1;

        this.finish = false;

        this.coinScriptIndex = 0;
        this.coinScript = {};
        this.coinScript[0] = {"timeIntervalForNextCoin": 200};
        this.coinScript[1] = {"timeIntervalForNextCoin": 190};
        // this.coinScript[2] = {"timeIntervalForNextCoin": 180};
        // this.coinScript[3] = {"timeIntervalForNextCoin": 170};
        // this.coinScript[4] = {"timeIntervalForNextCoin": 150};
        // this.coinScript[5] = {"timeIntervalForNextCoin": 130};
        // this.coinScript[6] = {"timeIntervalForNextCoin": 110};
        // this.coinScript[7] = {"timeIntervalForNextCoin": 90};
        // this.coinScript[8] = {"timeIntervalForNextCoin": 90};
        // this.coinScript[9] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[10] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[11] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[12] = {"timeIntervalForNextCoin": 110};
        // this.coinScript[13] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[14] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[15] = {"timeIntervalForNextCoin": 60};
        // this.coinScript[16] = {"timeIntervalForNextCoin": 110};
        // this.coinScript[17] = {"timeIntervalForNextCoin": 50};
        // this.coinScript[18] = {"timeIntervalForNextCoin": 50};
        // this.coinScript[19] = {"timeIntervalForNextCoin": 50};
        // this.coinScript[20] = {"timeIntervalForNextCoin": 150};
        // this.coinScript[21] = {"timeIntervalForNextCoin": 40};
        // this.coinScript[22] = {"timeIntervalForNextCoin": 40};
        // this.coinScript[23] = {"timeIntervalForNextCoin": 40};
        // this.coinScript[24] = {"timeIntervalForNextCoin": 20};

        this.OnCoinMiss = () => {};

        this.pickedFirstCoin = false;
    }

    Update(delta)
    {

        // If the coinScriptIndex has not reach the last instance/coin and its time to invoke the next coin then we spawn
        // a coin and increase the global velocity. 
        if(this.coinScriptIndex < Object.keys(this.coinScript).length && this.timeAcum > this.coinScript[this.coinScriptIndex]["timeIntervalForNextCoin"])
        {
            this.timeAcum = 0;
            this.coinArray.push( new Coin(this.coinSTartXPosition, this.coinStartYPosition) );
            this.coinScriptIndex++;
            if(this.coinScriptIndex < 9)
            {
                _globalVelocity -= 0.04;
            }
            else{
                _globalVelocity -= 0.005;
            }

            if(this.coinScriptIndex == Object.keys(this.coinScript).length)
            {
                this.finish = true;
            }
        }

        // Advance all coins
        this.coinArray.forEach((coin)=>
        {
            coin.Advance(_globalVelocity*delta*_velocityNormalizer);
        });

        // Deletes the coins that went out of the screen.
        if(this.coinArray.length > 0 && this.coinArray[0].GetX() + this.coinArray[0].container.width/2 < 0)
        {
            this.coinArray[0].Delete();
            this.coinArray.shift();
            this.OnCoinMiss();
        }

        this.timeAcum += delta;
    }

    NextFrame()
    {
        this.coinArray.forEach((coin)=>
        {
            coin.NextFrame;
        });
    }

    // Executes when the user clicks the screen to try to consume a coin.
    TryToConsumeCoin()
    {
        if(this.coinArray.length <= 0)
        {
            return;
        }

        let didNotHitCoin = true;

        // Check for all the coins if a coin was overlapped with the player.
        // If yes then its deletet.
        // Else we call the function OnCoinMiss which is defined outside this class
        // so it can execute whatever behaviour should happen.
        this.coinArray = this.coinArray.filter((coin)=>{

            let distanceCoinToPlayer = Math.abs( coin.container.x - _player.playerContainer.x );

            if(distanceCoinToPlayer + coin.circle.width/2 < _player.playerCircle.width / 2)
            {
                if(!this.pickedFirstCoin)
                {
                    _database.ref("PickedFirstCoin/Play_" + _replayNumber + "/" + _identifier).set(GetTodaysDate());
                    this.pickedFirstCoin = true;
                }
                coin.Delete();
                didNotHitCoin = false;
                return false;
            }

            return true;
        });

        if(didNotHitCoin)
        {
            console.log("coin missed");
            this.OnCoinMiss();
        }
        
    }
}