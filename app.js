require('dotenv')
const express = require('express')
const path = require('path')

const routes = require('./src/routes/routes')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.use(routes)

const { PORT } = process.env
app.listen(PORT, console.log(`Listening on ${PORT}`))