const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('*', (req, res) => {
    res.status(404).send('oh no')
})

app.listen(process.env.PORT)
