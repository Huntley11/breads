require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})