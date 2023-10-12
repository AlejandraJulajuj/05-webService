const express = require('express')
const app = express()
const port = 8080

//servir contenido estatico de la pagina principal 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

//para servir en la ruta http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
})

//para servir en cualquier ruta invalida
//_dirname+ path completya absolaa del recurso a desplegar
app.get('*', (req, res)=>{
    res.sendFile(__dirname +'/05-webService/public/404.html')
})

//metodo callback para habliitar el servido web en el puerto 8080
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`);
})

