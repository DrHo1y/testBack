const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('root')
  console.log(req.method)
})
app.get('/lol', (req, res) => {
  res.send('Hey bro, Nice Dick')
  console.log(req.method)
})

app.listen(port, () => {
  console.clear()
  console.log(`Example app listening at http://localhost:${port}`)
})