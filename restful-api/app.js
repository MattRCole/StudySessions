const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  console.log('I was called')
  next()
})

app.get('/', (req, res) => {
  res.render('home', { name: 'Sally' })
})

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})