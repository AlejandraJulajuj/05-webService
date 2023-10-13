const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//servir contenido estatico public3 donde esta el templated
//app.use(express.static('./public3/template'))
app.use(express.static('./public3'))

app.get('/', (req,res) =>{
    res.render('home2', {
        nombre: 'Alejandra gomez',
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