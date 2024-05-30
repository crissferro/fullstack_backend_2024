//creo un servidor con un modulo nativo de node http
/*
//creo un servidor estatico con http(modulo nativo)

const http = require(`http`)
const fs = require(`fs`)  //fs de filesystem es para leer una ruta de un archivo

// ahora puedo usarlo con el metodo 

const server = http.createServer((req, res) => {

    const file = fs.readFileSync(__dirname + '/index.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
    //res.end(`Hola desde el server de prueba de Node`)
    res.end(file)

})  //al ser un metodo con request y response

server.listen(3000, () => console.log(`Servidor arriba en el puerto 3000`))

//ahora lo ejecuto escribiendo node app.js en la consola
//lo detengo desde la consola con ctrl + c
// desde el navegador ejecuto localhost:3000 y sale funcionando

*/



//creo un server estatico con express (modulo externo)

const express = require(`express`)
const app = express()

const port = 3000 || process.env.port    //defino el puerto del servidor

//aparece por pantalla  el response
/*
app.get("/", (req, res) => {
    res.send(`Hola estoy en express`)
})

app.get("/hola", (req, res) => {
    res.send(`Esta es otra direccion diferente`)
})
*/
//para enviar un archivo html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(port, () => console.log(`Estoy arriba en el puerto: ${port}`))  //me muestra el puerto en el que esta levantado


