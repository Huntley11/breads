require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

// MIDDLEWARE
app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})