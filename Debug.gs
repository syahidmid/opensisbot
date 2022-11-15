/*
DEBUG
Verbose Methode
--------------------------------------------------------------------------------------------------------------
*/

// lumpia.DEBUG = true;

lumpia.verbose = true;

function handleUpdate() {
  let text = '/start';

  let update = { 
    "update_id": 578315393, 
    "message": { 
      "message_id": 14, 
      "from": { 
        "id": 925867562, 
        "is_bot": false, 
        "first_name": "Syahid", 
        "last_name": "Muhammad", 
        "username": "syahidmid", 
        "language_code": "en" 
        }, 
      "chat": { 
        "id": 925867562, 
        "first_name": "Syahid", 
        "last_name": "Muhammad", 
        "username": "syahidmid", 
        "type": "private" 
      }, 
      "date": 1668514366, 
      "text": text, 
      "entities": [{ "offset": 0, "length": 6, "type": "bot_command" }] } 
    };

  bot.handleUpdate(update);

}

/*
END OF DEBUG
Verbose Methode
--------------------------------------------------------------------------------------------------------------
*/
