const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res)=>{
    res.send("My name is ashish prakash singh. I am a software engineer");
})

app.listen(process.config.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})