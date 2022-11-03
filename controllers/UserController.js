//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 

const {DataTypes, ValidationError } = require ('sequelize')
//Modelo 
const UserModel = require ('../models/user')

//Crear la entidad 
const User = UserModel(sequelize, DataTypes)

//Las rutas de users 
// Listar todos los users 
exports.getAllUsers = async (req, res)=>{
    //Traer los usuarios 
    try {
        const users = await User.findAll();

        //Response con los datos 
        res
            .status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
        })
    }
  
}

// Listar users por id 
exports.getSingleUser = async (req, res)=>{
    try {
        const SingleUser = await User.findByPk(req.params.id);
            if(SingleUser){
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleUser
                })
            }else{
                res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
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
    //console.log(req.params.id)
    
}


//Actualizar el users 
exports.updateUser = async (req, res)=>{
    //console.log(req.params.id)
    
    try {
        const SingleUser = await User.findByPk(req.params.id);
            if (!SingleUser) {
                res
                .status(400)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
            })
            } else {
                
                await User.update(req.body,  {
                    where: {
                    id: req.params.id
                    }
                });
                const updateUser = await User.findByPk(req.params.id);

                res
                    .status(200)
                    .json({
                        "success": true,
                        "data": SingleUser
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


//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteUser = await User.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleUser
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

// Crear nuevo users 
exports.createUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
            res
            .status(200)
            .json({
            "success": true,
            "data": newUser
        })
    } catch (error) {
        if(error instanceof ValidationError){
            //Recorrer el arreglo de errores
                    //ForEach
                    //Map 
            const errores = error.errors.map((elemento) => {return elemento.message})
            res
            .status(400)
            .json({
                "success": false,
                "errors": error
        })
        }else{
            res
            .status(400)
            .json({
                "success": false,
                "errors": " Error de servidor desconocido"
            })
        }
        
    }
    
} 


