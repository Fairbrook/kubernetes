const express = require('express')
const app = express()
const port = 8090

app.get('/hello', (req, res) => res.send('World'))

app.listen(port, () => console.info('Listening to port', port))
