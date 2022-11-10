//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 

const {DataTypes, ValidationError } = require ('sequelize')
//Modelo
const BootcampModel = require('../models/bootcamps')
//Crear la entidad 
const Bootcamp = BootcampModel(sequelize, DataTypes)

//Las rutas de Bootcamp 
//Listar todos los Bootcamps 
router.post('/' , (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui van a salir todos los bootcamp "
        })
})

// Listar Bootcamp por id 
router.get('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})


//Actualizar el Bootcamp 
router.put('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})


//Borrar Bootcamp 
router.delete('/:id' , (req, res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui se va a eliminar el bootcamp cuyo id es ${req.params.id}`
        })
})

// Crear nuevo Bootcamp 
router.get('/' , (req, res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui vamos a registrar bootcamp"
        })
})