'use strict';
const {
  Model, Sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
            type:   DataTypes.STRING,
            allowNull: false, 
            validate:{
              isAlpha: {
                args: true, 
                msg:'Username debe tener solo letras'
              },
              notNull : {
                args: true, 
                msg:'Username debe estar presente'
              },
              notEmpty: {
                args: true, 
                msg:'Username no debe ser vacio'
              },
              unique(value) {
          
                return User.findOne({where:{username:value}})
                  .then((username) => {
                    if (username) {
                      throw new Error('Error hay mas de un nombre asi');
                    }
                  })
              },
            }
    },
    email:{
      type: DataTypes.STRING,
      validate:{
        isEmail:{
        args:true,
        msg: "Email no valido "
      },
    },
  },
    password:{ 
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true, 
          msg:'Password no debe ser vacio'
        },
       len:{
        args:[5,10],
        msg:"Password minimo 5 y Maximo 10 Caracteres "
       } 
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};