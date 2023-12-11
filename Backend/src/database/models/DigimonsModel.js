module.exports = (sequelize, DataTypes) => {
    const Digimons = sequelize.define('Digimons', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      level: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'digimons',
    });

    return Digimons;
  };