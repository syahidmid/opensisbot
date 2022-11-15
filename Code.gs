const token = 'YOUR BOT TOKEN';

const bot = new lumpia.init(token);
bot.options.log_id = YOUR TELEGRAM ID;

function doPost(e) {
  bot.doPost(e);
}

function setWebhook() {
  let url = 'https://script.google.com/macros/s/xxxx';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}

// mengaktifkan mode DEBUG
// untuk mendapatkan data JSON



/*
DATABASE 
MinisheetDB2
--------------------------------------------------------------------------------------------------------------
*/

var ssid = 'SHEET ID';
// atau:
var sheetURL = 'SPREADSHEET URL';

var dbNilai = new miniSheetDB2.init(ssid, 'Nilai UTS', {    
    col_length: 5,
    row_start: 2,
    json: true
});

/*
End of Database
------------------------------
*/
