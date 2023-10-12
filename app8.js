const express = require('express')
const app = express()
const port = 8080

/**
 * Se creo carpeta public y dentro index.html
 * se creara un middlware para habioitar ruta la index
 */

//servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req,res) => {
    res.send('404 | Page not found')
})

app.listen(port, () =>{
    console.log(`Example app listenig at http://localhost: ${port}`);
})

