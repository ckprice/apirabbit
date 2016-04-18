# apirabbit
Create API endpoints on the fly for testing, public use, and whatever else.

## URL

- Hosted on heroku at [http://apirabbit.herokuapp.com](http://apirabbit.herokuapp.com)
- May use apirabb.it or apirabbit.com some day.

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

- Mostly sticks to Flux Architecture

## Stuff this uses

- Thanks for [the carrot](https://www.iconfinder.com/Squid.ink)!
- [JSON Linter](https://www.npmjs.com/package/json-lint)
- Bootstrap