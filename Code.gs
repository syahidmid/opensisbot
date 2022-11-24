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

var dbNilai = new miniSheetDB2.init(ssid, 'Nilai', {    
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

var dbTest = new miniSheetDB2.init(ssid, 'Test', {    
    col_length: 5,
    row_start: 2,
    json: true
});

/*
Test Database
Try to run this function to write a message "Hello World!" in the "Test" Sheets 
Var newRow allows you be update the data on the next row, so it doesn't overwrite the previous data.
*/

function testDB() {

  var message = "Hello, World! ";
  var newRow = dbTest.last_row + 1;
  var targetRow = dbTest.range(newRow, 1);

  targetRow.setValue(message);

}


/*
End of Database
------------------------------
*/
