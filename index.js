require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const Activity = require('./activity-controller.js')

app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use('/', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  next();
});

app.get('/activity-groups',Activity.getAll)
app.post('/activity-groups',Activity.postOne)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})