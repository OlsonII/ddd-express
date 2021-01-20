const express = require('express')
const clients = require('./controller/client.controller');
const app = express()
const port = 3000

app.use(express.json())
app.use('/client', clients);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})