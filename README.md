# forum

## the community forum for project lemonade

#### Authors:

- [Cursors]#9257

### To-do List

- [ ] Ask question
- [ ] Edit question
- [ ] Delete question
- [ ] Post answer
- [ ] Edit answer
- [ ] Delete answer
- [ ] Auth redirect
- [ ] Session stores
- [x] Welcome page
- [x] Ask page
- [x] Log out
- [x] Serialization
- [x] Deserialization
- [x] Database
- [x] Header
- [x] Footer
- [x] 404 Page
- [x] Layout

Frontend

![100%](https://progress-bar.dev/100/)

Backend

![50%](https://progress-bar.dev/50/)

### Technologies used:

- [Next.js](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Passport](http://www.passportjs.org/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Sequelize](https://sequelize.org/)
- [TypeScript](https://www.typescriptlang.org/)

Given the loving name, STERN Stack.

### Starting Development

#### Clone the repository

Then open the terminal and execute `cd src`:

```bash
$ cd src
```

#### Next, create a `.env` file with the following variables:

- PORT
- CLIENT_ID
- CLIENT_SECRET
- CLIENT_REDIRECT

Set the port environment variable to whatever port you'd like to use.

Set the client id variable to your Discord app's id.

Set the client secret variable to your Discord app's secret.

Set the client redirect variable to your Discord app's oauth2 redirect url.

#### Then install the required packages.

Execute `cd ..` to go back to the root directory and install:

```bash
$ cd ..
$ npm i # or with yarn, use `yarn`
```

#### After everything is installed, execute `cd src` once again and start the server:

```bash
$ cd src
$ npm start # or with yarn, use `yarn start`
```

You should get something like this in your terminal:

```bash
Loaded env from /Users/cursorsdottsx/Documents/forum/src/.env
event - compiled successfully
Server listening on port 3000!
```

### :tada: You have started the server and are ready to start developing!

### :stop_sign: Some important notes:

- Do not touch the tsconfig.json or package.json files.
- All media (images, videos, audio) files should be contained in the `public` folder.
- This project is made entirely in [TypeScript](https://www.typescriptlang.org/).
- This application uses [Server Side Rendering](https://www.youtube.com/watch?v=GQzn7XRdzxY).

### :warning: You must start the server just like this otherwise it will fail.

### Initializing and reinitializing the database

#### :warning: You shouldn't do anything listed here unless it is initialization.

If you haven't already, open the terminal and navigate to the `src` folder:

```bash
$ cd src
```

Then initiate the database with:

```bash
$ npm run dbinit
```

or with yarn:

```bash
$ yarn dbinit
```

You should see a message like this:

```bash
Database synced
```
