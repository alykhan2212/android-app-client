require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const models = require('./models');



app.get('/', (req, res) => {
  // res.send('Hello World!')
  // models.User.create({
  //   username: 'john',
  //   email: '13132132@example.com',
  //   password: '12345678',
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // }).then(res => console.log(res)).catch(err => console.log("eeeee",err));

  // models.User.findAll().then(pr => console.log(pr))

})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
