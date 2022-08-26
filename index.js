require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.status(200).send('Hello, World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})