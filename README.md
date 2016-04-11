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

`/server/server.js`	--> `/{server,app}/controllers/`	--> `views`

## Database

- Using [Robomongo](https://robomongo.org/download) as an Admin UI. It's pretty good.

## ESLint

- This app uses ESLint. Means you'll have to add a `/*global foo */` for global vars/functions.

