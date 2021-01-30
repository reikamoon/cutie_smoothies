'use strict';
module.exports = (sequelize, DataTypes) => {
  const Smoothie = sequelize.define('Smoothie', {
   name: DataTypes.STRING,
   desc: DataTypes.TEXT,
   rating: DataTypes.INTEGER,
   link: DataTypes.STRING,
   preptime: DataTypes.STRING,
   servings: DataTypes.STRING,
   ingredient1: DataTypes.STRING,
   ingredient2: DataTypes.STRING,
   ingredient3: DataTypes.STRING,
   ingredient4: DataTypes.STRING,
   ingredient5: DataTypes.STRING,
   instructions: DataTypes.TEXT,
   tag1: DataTypes.STRING,
   tag2: DataTypes.STRING,
   tag3: DataTypes.STRING
 }, {
   sequelize,
   modelName: 'Smoothie',
 });
 return Smoothie;
};
