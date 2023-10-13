const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

/**
 * este archivo necesta de la carpea public 3 ya que todos los archivos del templated se traladaran a la carpeta de  template para hacer un backu´p
 * y poder esmpezr el trabajo de hbs (handlebars) para renderizar el sitio semiestatico
 * al momento de compilar el pp12 el sitio etara roto  y saldra de la pagina de error
 * el hbs me da la capacidad de reutilir codigo
 */

//servir contenido estatico public3 donde esta el templated
app.use(express.static('./public3/template'))
app.use(express.static('./public3'))

app.get('/', (req,res) =>{
    res.render('home')
})

app.get('/generic.', (req, res) => {
    res.sendFile(__dirname + './public3/generic.html')
})

app.get('/elements.html', (req, res) => {
    res.sendFile(__dirname + './public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + './public/404.html')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})
