const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.listen(port)
app.use(express.static(__dirname));

  
app.get('/', (req, res) => {
  res.sendFile('./views/index.html',{root: __dirname})
})

app.get('*', (req, res) => {
  res.send("Not Found")
})