//creo un server estatico con express (modulo externo)

const express = require(`express`)
const override = require('method-override')
const rutas = require('./src/routes/mainRoutes.js')

const app = express()

const port = 8080 || process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(override('_metodo'))

app.use('/', rutas)


app.use((req, res, next) => {
    res.status(404).send(`<h1 style="color: red"> Recurso no encontrado!</h1>`)
})

const IP = '127.0.0.1';

app.listen(port, IP, () => console.log(`Hola, estoy arriba en el puerto: ${port}`))
