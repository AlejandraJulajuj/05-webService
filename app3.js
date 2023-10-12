const http = require('http')

//enviando un archivo CSV, esto es una sola ruta
http.createServer((req,res) =>{

    res.setHeader('Content-Disposition', 'attachment; filename')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id,nombre\n')
    res.write('1, Antonio \n')
    res.write('2, Steve \n')
    res.write('3, Bill \n')
    res.write('4, Dennis \n')
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);