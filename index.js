require('dotenv').config()
const express = require('express')
const app = express()
const port = 8090
const Activity = require('./activity-controller.js')
const Todo = require('./todo-controller.js')

app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use('/', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  next();
});

app.get('/activity-groups',Activity.getAll)
app.post('/activity-groups',Activity.postOne)
app.get('/activity-groups/:user_id',Activity.getOne)
app.patch('/activity-groups/:user_id',Activity.updateOne)
app.delete('/activity-groups/:user_id',Activity.destroyOne)

app.get('/todo-items',Todo.getAll)
app.post('/todo-items',Todo.postOne)
app.get('/todo-items/:user_id',Todo.getOne)
app.patch('/todo-items/:user_id',Todo.updateOne)
app.delete('/todo-items/:user_id',Todo.destroyOne)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})