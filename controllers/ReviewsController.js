//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 

const {DataTypes, ValidationError } = require ('sequelize')
//Modelo 
const ReviewModel = require ('../models/reviews')

//Crear la entidad 
const Review = ReviewModel(sequelize, DataTypes)

//Las rutas de Course 
// Listar todos los Course 
exports.getAllReviews = async(req, res)=>{
   
   try {
    const review = await Review.findAll();
    //Response con los datos 
            res
            .status(200)
            .json({
                "success": true,
                "data": review
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
exports.getSingleReview = async(req, res)=>{
    try {
        const SingleReview = await Review.findByPk(req.params.id)
        if (SingleReview) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleReview
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
exports.updateReview = async (req, res)=>{
    try {
        const SingleReview = await Review.findByPk(req.params.id)
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
             
            await Review.update(req.body,  {
                where: {
                id: req.params.id
                }
            });
            const updateReview = await Review.findByPk(req.params.id);

            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleReview
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
exports.deleteReview =async (req, res)=>{
    try {
        const SingleReview = await Review.findByPk(req.params.id);
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteReview = await Review.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleReview
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
exports.createReview = async(req, res)=>{
    try {
        const newReview = await Review.create(req.body);
            res
            .status(200)
            .json({
            "success": true,
            "data": newReview
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

