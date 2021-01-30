'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Smoothies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING
      },
      preptime: {
        type: Sequelize.STRING
      },
      servings: {
        type: Sequelize.STRING
      },
      ingredient1: {
        type: Sequelize.STRING
      },
      ingredient2: {
        type: Sequelize.STRING
      },
      ingredient3: {
        type: Sequelize.STRING
      },
      ingredient4: {
        type: Sequelize.STRING
      },
      ingredient5: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.TEXT
      },
      tag1: {
        type: Sequelize.STRING
      },
      tag2: {
        type: Sequelize.STRING
      },
      tag3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Smoothies');
  }
};