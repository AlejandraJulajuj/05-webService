const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Home Page')
})

app.get('/hola-mundo', function(req, res){
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', function(req,res){
    res.send('404 | Page not found')
})

app.listen(8080);
console.log('Escuchando el puerto', 8080);