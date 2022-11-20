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



/*
DATABASE 
MinisheetDB2
--------------------------------------------------------------------------------------------------------------
*/

var ssid = 'XXX';
// atau:
var sheetURL = 'xxx';

var dbNilai = new miniSheetDB2.init(ssid, 'Nilai UTS', {    
    col_length: 20,
    row_start: 2,
    json: true
});

var dbPpdb = new miniSheetDB2.init(ssid, 'PPDB', {    
    col_length: 5,
    row_start: 2,
    json: true
});

var dbLog = new miniSheetDB2.init(ssid, 'Log', {    
    col_length: 5,
    row_start: 2,
    json: true
});

var dbKodemapel = new miniSheetDB2.init(ssid, 'Kode Mapel', {    
    col_length: 5,
    row_start: 2,
    json: true
});

/*
End of Database
------------------------------
*/
