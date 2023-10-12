const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//servir contenido estatico public3 donde esta el templated
app.use(express.static('/05-webService/public3'))

app.get('/', (req,res) =>{
    res.render('./views/home.hbs', {
        nombre: 'Alejandra gomez',
        titulo: 'Curso de Node'
    })
})

app.get('./public3/template/generic.html', (req, res) => {
    res.sendFile(__dirname + './public3/generic.html')
})

app.get('./public3/template/elements.html', (req, res) => {
    res.sendFile(__dirname + './public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + './public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})