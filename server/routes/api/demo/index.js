//NPM
const express = require('express')
const router = express.Router()
const db = require('../../../database/mysql')

//Routes
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM posts'
  db.query(sql, (err, result) => {
    if(err) throw err
    res.json(result)
  })
})

module.exports = router