const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

//utilizacion de hadlebars hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parcialees "codigo que se repite en mas de un llugar o paginas web"
hbs.registerPartials(__dirname + './views/partials')
app.use(express.static('./public3/template'))

//servir contenido estatico public3 donde esta el template
app.use(express.static('./public3'))

//enviando argunmentos a home2
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Alejandra Gomez',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alejandra Gomez',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alejandra Gomez',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + './public3/template/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + './public3/template/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + './public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})