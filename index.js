const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.render('index')
})

app.get('WhyYoga', (request, response) => {
  response.render('This route will show an introduction to the different reasons why people practice yoga')
})

app.get('/YogaPractices', (request, response) => {
  response.send('This route will show a list of the most popular yoga practices')
})

app.get('/YogaTeachers', (request, response) => {
  response.render('This route will show list of yoga teachers')
})

app.get('/YogaTeachers/:name', (request, response) => {
  response.render('This route will show a specifc yoga teacher with relevant information')
})

app.delete('/YogaTeachers/:name', (request, response) => {
  response.render('This route will show a specifc yoga teacher with relevant information')
})

app.post('/YogaTeachers/:name', (request, response) => {
  response.render('This route will create a new posting with the yoga teachers relevant information')
})

app.listen(1337, () => {
  console.log('yay server up on 1337') // eslint-disable-line no-console
})
