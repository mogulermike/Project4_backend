'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', [
      {
        name:'Golden-Pothos',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Golden-Pothos-Kitchen-1_400x400.jpg?v=1602785557',
        light: 'Low',
        details: "This lush vining indoor plant can actually climb, transforming its space into a golden-green cascade.  The Pothos Golden is a particularly great choice for your home of office because it is beautiful AND easy to keep healthy. All this easy-care plant needs is water and low light to look its best."
      },
      {
        name:'Anthurium',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Anthurium-Superbum-Grow-Pot-Small_1000x1000.jpg?v=1588093059',
        light: 'Medium to Bright Indirect',
        details: "he proud, finger-like leaves of the Anthurium superbum line up in a bird’s nest formation and have a striking, sculptural  elegance.   The rich green and sepia tones lure you in and transport you to an exotic place.   This indoor plant brings style with it everywhere it goes. This low maintenance houseplant can be placed in just about any part of your home and will thrive with minimal care, although it prefers bright, indirect light.",
      },
      {
        name:'Pothos Marble Queen',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/detail-Pothos-Marble-Queen-1_bdd258ff-3af6-4993-8ae8-5029ce8670f2_1000x1000.jpg?v=1605541461',
        light: 'Low to Bright Indirect',
        details: "Like monochromatic stained glass, the leaves of these spectacular, long Marble Queen Pothos vines have a slight translucence.  Pure white and green variegation covers the entirety of the foliage, making this plant a stunning addition to your plant collection. In addition to being beautiful, The Pothos Marble Queen is one of the easiest plants to please. It requires minimal care and prefers low light, so it is an ideal plant for those darker spots in your home or office.",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {});
  }
};
