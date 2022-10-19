const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//Las rutas de bootcamps 
// Crear nuevo Bootcamp 
roouter.get('/' , (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui vamos a registrar bootcamp"
        })
})

// Listar todos los Bootcamps 
roouter.post('/' , (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui van a salir todos los Bootcamsp "
        })
})

// Listar Bootcamp por id 
roouter.get('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})


//Actualizar el Bootcamp 
roouter.put('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})

//Borrar Bootcamp 
roouter.delete('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui se va a eliminar el bootcamp cuyo id es ${req.params.id}`
        })
})
module.express = router 
