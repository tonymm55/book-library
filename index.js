// const path = require('path');
// const app = require(path.join(__dirname, 'src', 'app.js'));

const app = require('./src/app.js');

const APP_PORT = 4000;


app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT} 🚀`)
});
