require('dotenv').config();
const api = require('./app/api');

api().then(() => {
  console.log(`Example app`)
});