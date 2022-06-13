const Level_1 =
{
    Update:function(delta)
    {
        timer_40ms += delta;

        if(timer_40ms > 4)
        {
            timer_40ms = 0;
            _player.NextFrame();
        }

        _player.Update(delta);
    }
}