'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Album, {foreignKey: 'artist_id'})// associations can be defined here
  };
  return Artist;
};