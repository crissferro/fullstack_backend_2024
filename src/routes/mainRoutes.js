const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/dinamic/:num", (req, res) => {
	//console.log(req.params.num)
	res.sendFile(path.resolve(__dirname + `./../views/dinamico${req.params.num}.html`))
})

router.post('/dinamic', (req, res)=>{
	//console.log(req.body)
	res.send(`<h2>Se hizo algo con ${req.body.create} en el create</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
	//res.json(req.body.create)
})

router.put('/dinamic', (req, res)=>{
	res.send(`<h2>Se hizo algo con ${req.body.actualizar} en el update</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
})

router.delete('/dinamic', (req, res)=>{
	res.send(`<h2>Se hizo algo con ${req.body.eliminar} en el delete</h2><a href="/dinamic/1">Regresar a la página anterior</a>`)
})

module.exports = router