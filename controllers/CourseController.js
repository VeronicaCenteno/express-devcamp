//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 

const {DataTypes, ValidationError } = require ('sequelize')
//Modelo 
const CourseModel = require ('../models/courses')

//Crear la entidad 
const Course = CourseModel(sequelize, DataTypes)

//Las rutas de Course 
exports.getAllCourses = async(req, res)=>{
   
    try {
     const course = await Course.findAll();
     //Response con los datos 
             res
             .status(200)
             .json({
                 "success": true,
                 "data": course
             })
    } catch (error) {
         res
             .status(200)
                 .json({
                     "success": false,
                     "data": "Error de servidor desconocido "
                 })
      } 
 }
 
// Listar Course por id 
exports.getSingleCourse = async(req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id)
        if (SingleCourse) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleCourse
                })
        } else {
                res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
            })
        }
    } catch (error) {
            res
                .status(401)
                .json({
                    "success": false,
                    "errors": "Error de servidor desconocido"
            })
    }
}


//Actualizar el Course 
exports.updateCourse = async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id)
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
             
            await Course.update(req.body,  {
                where: {
                id: req.params.id
                }
            });
            const updateCourse = await Course.findByPk(req.params.id);

            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleCourse
                })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "Error de servidor desconocido"
    })
    }
}

//Borrar Course 
exports.deleteCourse =async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteCourse = await Course.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleCourse
            })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}
// Crear nuevo Course 
exports.createCourse = async(req, res)=>{
    try {
        const newCourse = await Course.create(req.body);
            res
            .status(200)
            .json({
            "success": true,
            "data": newCourse
        })
        
    } catch (error) {
        if(error instanceof ValidationError){
            //Recorrer el arreglo de errores
                    //ForEach
                    //Map 
            const errores = error.errors.map((elemento) => {return elemento.message})
            res
            .status(422)
            .json({
                "success": false,
                "errors": errores
            })
        }else{
            res
            .status(401)
            .json({
                "success": false,
                "errors": " Error de servidor desconocido"
            })
        }
        
    }
}

