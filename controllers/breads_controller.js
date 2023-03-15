const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

// SHOW
breads_router.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})



// INDEX
breads_router.get('/', (req, res) => {
    res.render('index', {breads: Bread})
    // res.send(Bread)
})

module.exports = breads_router
