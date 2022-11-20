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
    "update_id": xxx, 
    "message": { 
      "message_id": xx, 
      "from": { 
        "id": xx, 
        "is_bot": false, 
        "first_name": "xx", 
        "last_name": "xxx", 
        "username": "xxx", 
        "language_code": "en" 
        }, 
      "chat": { 
        "id": xxx, 
        "first_name": "xxx", 
        "last_name": "xxx", 
        "username": "xxx", 
        "type": "private" 
      }, 
      "date": xxx, 
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
