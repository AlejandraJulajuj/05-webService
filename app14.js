const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

// uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + './views/partials')

//servir contenido estatico public3 donde esta el templated
app.use(express.static('./public3'))

app.get('/', (req,res) =>{
    res.render('home3', {
        nombre: 'Alejandra gomez',
        titulo: 'Curso de Node'
    })
})

/**app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})*/

app.get('/generic', (req, res) => {
    res.render('./public3/template/generic.html',{
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.sendFile('./public3/template/elements.html',{
        nombre: 'Alejandra Goemz',
        titulo: 'Curso de node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + './public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})