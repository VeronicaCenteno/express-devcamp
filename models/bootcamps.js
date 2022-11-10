'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamps.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          isAlpha:{
            args: true,
            msg: 'El name debe tener solo letras'
          },
          notNull:{
            args: true,
            msg:'El name debe estar presente'
          },
          notEmpty:{
            args: true,
            msg:'El name no debe estar vacio '
          },
          unique(value) {
          
            return Bootcamps.findOne({where:{name:value}})
              .then((name) => {
                if (name) {
                  throw new Error('Error hay mas de un nombre asi');
                }
              })
          },
        }
    } ,

    description:{ 
      type:DataTypes.STRING,
      validate:{
        isDescription:{
        args: true,
        msg:'Descrption no debe ser vacio'
        },
      },

    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:'El phone  no debe ser vacio'
        },
        len:{
          args:[10],
          msg:"Phone debe ser de 10 caracteres "
         } 
      }
    },
    average_rating:{ 
     type: DataTypes.INTEGER,
     validate:{
      notEmpty:{
        args:true,
        msg:'El average_rating  no debe ser vacio'
      },
     }
    },
    average_cost:{ 
      type:DataTypes.FLOAT,
      type: DataTypes.INTEGER,
      validate:{
       notEmpty:{
         args:true,
         msg:'El average_cost  no debe ser vacio'
       },
      }}
  }, {
    sequelize,
    modelName: 'Bootcamps',
  });
  return Bootcamps;
};