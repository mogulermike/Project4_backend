'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', [
      {
        name:'Pothos',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Golden-Pothos-Kitchen-1_400x400.jpg?v=1602785557',
        light: 'Low',
      },
      {
        name:'Snake',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Golden-Pothos-Kitchen-1_400x400.jpg?v=1602785557',
        light: 'Low',
      },
      {
        name:'Spider',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Golden-Pothos-Kitchen-1_400x400.jpg?v=1602785557',
        light: 'Low',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {});
  }
};
