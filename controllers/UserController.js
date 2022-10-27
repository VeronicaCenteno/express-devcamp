//Dependencias
//Al objeto de conexion 
const sequelize = require('../config/seq')

//DataTypes de sequelize 
const {DataTypes} = require ('sequelize')

//Modelo 
const UserModel = require ('../models/user')

//Crear la entidad 
const User = UserModel(sequelize, DataTypes)

//Las rutas de users 
// Listar todos los users 
exports.getAllUsers = async (req, res)=>{
    //Traer los usuarios 
    const users = await User.findAll();

    //Response con los datos 
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Listar users por id 
exports.getSingleUser = async (req, res)=>{
    const SingleUser = await User.findByPk(req.params.id);
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}


//Actualizar el users 
exports.updateUser = async (req, res)=>{
    //console.log(req.params.id)
    await User.update(req.body,  {
        where: {
         id: req.params.id
        }
      });
      const SingleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}


//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
            id: req.params.id
        }
      });
    
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}

// Crear nuevo users 
exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
} 


