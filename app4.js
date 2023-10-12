/**
 * Instalar en este proyecto express
 * npm i install express
 */

const express= require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola mundo')
})

app.listen(8080);

console.log('Escuchando el puerto', 8080);