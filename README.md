# telegbot

telegbot is a nodejs library for dealing with telegram bots

## Installation

Use the package manager [npm](https://www.npmjs.com/package/telegbot) to install telegbot.

```bash
npm i telegbot
```

## Snippet

```javascript
import Telegbot from "telegbot";

const bot = new Telegbot("<token>");
bot.getBot();
```

## returns

```json
{
    "ok": true,
    "result": {
        "id": xxxx,
        "is_bot": true,
        "first_name": "First_Name",
        "username": "username",
        "can_join_groups": true,
        "can_read_all_group_messages": false,
        "supports_inline_queries": false
    }
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
