require('dotenv').config();
const api = require('./app/api');

api().then(() => {
  console.log(`Server started...`)
}).catch((err) => {
  console.log(err);
})