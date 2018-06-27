//NPM
const express = require('express')
const demo = require('./routes/api/demo')

//Initialize App
const app = express()
const port = 5000

app.use('/api/demo', demo)

//Start Server
app.listen(port, () => console.log(`Server started on Port:${port}`))
