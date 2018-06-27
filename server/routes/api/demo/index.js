//NPM
const express = require('express')
const router = express.Router()

//Routes
router.get('/', (req, res) => {
  const demo = {
    title: 'Welcome to Express, Nerrrrd!',
    body: 'This is some example data coming from the Express Server'
  }
  res.json(demo)
})

module.exports = router