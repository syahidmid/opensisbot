const token = '5636235462:AAEz9fpg8mYv1ZZx8XdmOkswekMPlJycvr8';

const bot = new lumpia.init(token);
bot.options.log_id = 925867562;

function doPost(e) {
  bot.doPost(e);
}

function setWebhook() {
  let url = 'https://script.google.com/macros/s/AKfycbxlyWsTWZwGJBMGAHCedtAB6QF4drCPmSg9VfTCbfP8Ws1ql6TCA2NsRKJ5lfC74ZkN/exec';
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

var ssid = '1MHXkH913-f2Ga7qfkFswjGqUWO3VYGvkl0iSMpP7NCg';
// atau:
var sheetURL = 'https://docs.google.com/spreadsheets/d/1MHXkH913-f2Ga7qfkFswjGqUWO3VYGvkl0iSMpP7NCg/edit#gid=0';

var dbNilai = new miniSheetDB2.init(ssid, 'Nilai UTS', {    
    col_length: 5,
    row_start: 2,
    json: true
});

/*
End of Database
------------------------------
*/
