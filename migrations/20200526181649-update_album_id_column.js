'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Tracks', // name of Source table
      'album_id', // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Albums', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
 
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Tracks', // name of Source table
      'album_id' // key we want to remove
    );
  }
 };
 
