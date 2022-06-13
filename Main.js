_identifier = GetUniqueIdentifier();

_database.ref("GameStarted/" + _identifier).set(GetTodaysDate());

AppInit.init();

Loader.onFinishLoadingDo = GameSetup.Start;

Loader.loadAssets();


function GetTodaysDate()
{
    var today = new Date();
    var dd = String(today.getUTCDate()).padStart(2, '0');
    var mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hh = String(today.getUTCHours()).padStart(2, '0');
    var m = String(today.getUTCMinutes()).padStart(2, '0');
    var ss = String(today.getUTCSeconds()).padStart(2, '0');
    
    return yyyy + '_' + mm + '_' + dd + '_' + hh + '_' + m + '_' + ss;
}

function GetUniqueIdentifier()
{
    return Math.random().toString().substr(2, 8);
}