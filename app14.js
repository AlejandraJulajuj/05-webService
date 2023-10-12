const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

// uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + './views/partials')

//servir contenido estatico public3 donde esta el templated
app.use(express.static('/05-webService/public3'))

app.get('/', (req,res) =>{
    res.render('./views/home3.hbs', {
        nombre: 'Alejandra gomez',
        titulo: 'Curso de Node'
    })
})

app.get('./public3/template/generic.html', (req, res) => {
    res.render('./views/generic.hbs', {
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})

app.get('./public3/template/elements.html', (req, res) => {
    res.render('./views/elements.hbs', {
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})

app.get('./public3/template/generic.html', (req, res) => {
    res.sendFile(__dirname + './public3/template/generic.html')
})

app.get('./public3/template/elements.html', (req, res) => {
    res.sendFile(__dirname + './public3/template/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + './public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})