const sequelize = require ('./seq')
const colors =require('colors')
const { DataTypes } = require('sequelize')

//Crear una instancia de el modelo User 
const UserModel = require('../models/user')
const User =  UserModel(sequelize, DataTypes)

//Definir una función de conexion a la base de datos 

const connectDB = async ()=>{
    try {     
            //Conectarse a la base de datos 
            await sequelize.authenticate()
            console.log('Conectado a mysql'.bgMagenta.black)
            const jane = await User.create({username: "Jane", 
                                            email: "jane@gmail.com",
                                            password:"123" });
            console.log("Jane's auto-generated ID:", jane.id);
    } catch (error) {
        console.log(error)
    }
    
}

connectDB()