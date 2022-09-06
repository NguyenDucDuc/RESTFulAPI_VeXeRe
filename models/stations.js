'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({trips}) {
      // define association here
      this.hasMany(trips , {foreignKey : 'fromStation' , as : 'from'});
      this.hasMany(trips , {foreignKey : 'toStation' , as : 'to'});
    }
  }
  Stations.init({
    name:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        len : [3, 30],
      }
    }, address:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        checkLen(value){
          if(value.length > 5 && value.length <= 20){
            return true;
          }else{
            throw new Error('Độ dài phải từ 5 đến 10')
          }
        }
      }
    }, province:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isIn: [['HCM', 'DN', 'CT' , 'HP' , 'HN']],
      }
    },
  }, {
    sequelize,
    modelName: 'Stations',
  });
  return Stations;
};

