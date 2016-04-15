# apirabbit
Create API endpoints on the fly for testing, public use, and whatever else.

## Development

### Front end
- `git clone https://github.com/ckprice/apirabbit.git`
- `cd apirabbit`
- `npm install -g gulp bower nodemon`
- `gulp` (have to run this after any changes)
- `nodemon ./server/server.js`
- Browse to [`http://localhost:7777/index.html`](http://localhost:7777/index.html)

### Database - configure mongo
- `sudo mkdir -p /data/db`
- `sudo mongod` - start the database (you'll have to make sure its running)

## Architecture Notes

`Views` => `Actions` => `Dispatcher` => `Store`

## License Info

- Thanks for [the carrot](https://www.iconfinder.com/Squid.ink)!

