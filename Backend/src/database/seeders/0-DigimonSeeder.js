const {fetchDigimons} = require('../../utils/fetchData')

module.exports = {
    up: async (queryInterface, _Sequelize) => {
      
      const arrayToSeed = await fetchDigimons();
      await queryInterface.bulkInsert('digimons',
      arrayToSeed, { timestamps: false });
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('digimons', null, {});
    },
  };
  