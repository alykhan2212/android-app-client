require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;


app.get('/web', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
