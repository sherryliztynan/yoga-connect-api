const bodyParser = require('body-parser')
const express = require('express')
const { getAllYogaReasons } = require('./controllers/yogareasons')
// eslint-disable-next-line max-len
const { getAllYogaTeachers, getTeacherByName, saveNewTeacher, deleteYogaTeacher } = require('./controllers/yogateachers')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/YogaReasons', getAllYogaReasons)

app.get('/YogaTeachers', getAllYogaTeachers)

app.get('/YogaTeachers/:name', getTeacherByName)

app.delete('/YogaTeachers/:name', deleteYogaTeacher)

app.post('/YogaTeachers/:name', saveNewTeacher)

app.listen(1337, () => {
  console.log('yay server up on 1337') // eslint-disable-line no-console
})
