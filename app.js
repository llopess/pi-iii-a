const express = require('express')

const app = express()

app.listen(process.env.PORT, console.log('Hello World'))

module.exports = app