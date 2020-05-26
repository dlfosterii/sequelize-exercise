'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Albums', // name of Source table
      'artist_id', // name of the key we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Artists', // name of Target table
          key: 'id', // key in Target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
 
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Albums', // name of Source table
      'artist_id' // key we want to remove
    );
  }
 };
