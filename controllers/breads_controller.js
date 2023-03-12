const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

breads_router.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})

// INDEX
breads_router.get('/', (req, res) => {
    res.render('index', {breads: Bread})
    // res.send(Bread)
})

module.exports = breads_router
