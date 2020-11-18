'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', [
      {
        name:'Pothos Golden',
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
      },
      {
        name:'Pothos Neon',
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Neon-Grow-Pot-Large_1000x1000.jpg?v=1604873450',
        light: 'Low to Bright Indirect',
        details: "he color-intense Neon Pothos (Epipremnum aureum 'Neon') features heart-shaped leaves in a compelling and bright neon green. As stunning as its color is, this easy-care low-maintenance plant is just as tough and simple to grow and care for as all other Pothos and will even survive in bathrooms and offices where low light is the norm. This indoor plants can tolerate lower light but will do best  in bright, indirect light. Direct sunlight will actually scorch the leaves, while not enough light will result in pale green and smaller-sized leaves. "
      },{
        name:"Pothos N'Joy",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/detail-Pothos-n-Joy-2_1000x1000.jpg?v=1602785746',
        light: 'Low to Bright Indirect',
        details: "This vining indoor houseplant has a handprinted quality and is packed full with stems of prominent pure white variegated leaves. This plant is easy care and low-light tolerant, and makes a terrific beginner plant or gift."
      },{
        name:"Snake Plant",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/detail-Sansevieria-zeylanica-Grow-Extra-Large_1000x1000.jpg?v=1602786712',
        light: 'Low to Bright Indirect',
        details: "Possibly the most recognizable and iconic Sansevieria, this plant’s leaves are posture-perfect, standing tall and defining vertical spaces.  This houseplant is revered for its durability and is an interior designer's dream plant. You will definitely want to swipe right on this one! Snake plants are excellent air-purifying houseplants and will provide some extra oxygen to your homes.  Low-light tolerant and drought tolerant, these architectural indoor plants add more than just good looks--Sansevieria are perfect starter plants and make the perfect housewarming gifts."
      },{
        name:"Philodendron Brasil",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Philodendron-Brasil-Grow-Pot-Extra-Large_21a01b43-909b-49f2-bb3c-781f11bdb711_1000x1000.jpg?v=1602774837',
        light: 'Low to Bright Indirect',
        details: "This plant is a conversation stopper AND starter.  When friends visit your home for the first time, Don’t be surprised when someone in the group stops in the middle of a story to  ask, 'What plant is THAT?'   This question, of course, starts a new discussion about the beauty of the Philodendron Brasil's  iridescent swirls of chartreuse and deep green. This plant may seem demanding, but it needs minimal attention to thrive.  It can be placed on shelves, mounted on the wall, or simply set on a tabletop -- any surface that will let the foliage cascade to the floor.  "
      },{
        name:"ZZ Plant Zenzi",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/ZZ-Zenzi-Plant-Mottled-Pot-Large_1000x1000.jpg?v=1602602546',
        light: 'Low to Bright Indirect',
        details: "Zamioculcus zamiifolia 'Zenzi' is a cousin of the more vertical ZZ Plant.  Zenzi packs a punch with shiny, water-filled leaves.  With its dense collection of thick stems on which the thick, green leaves grow, this plant looks as though you are growing a miniature exotic jungle. This easy-care plant prefers less watering and is drought resistant.  For best results, water when the top of the soil becomes dry.  This plant also prefers less light and less fuss!"
      },{
        name:"Peperomia Golden Gate",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/detail-Peperomia-Golden-Gate-1_1000x1000.png?v=1602774665',
        light: 'Medium to Bright Indirect',
        details: "Feel free to get right in this houseplant's personal space and admire the marbled variegation on its hardy leaves.  The Peperomia obtusifolia 'Golden Gate' is a true easy-care plant as it is drought tolerant and rarely requires fertilization.  This houseplant is perfect for the forgetful indoor gardener!  "
      },{
        name:"Dracaena Magenta",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Dracaena-Marginata-Magenta-Cane-Organic-Pot-Small_1000x1000.jpg?v=1589305186',
        light: 'Medium to Bright Indirect',
        details: 'Combine all the best traits of indoor plants:  easy-care, drought-resistant, and devilishly handsome.  Now add a splash of color, and you have Dracaena Magenta! Each slender green leaf of this plant features pinstriped edge in tinted shades of deep magenta.  Dracaena are also known for their air-purifying abilities and will survive in most household environments.  This is a perfect indoor plant for beginners! '
      },{
        name:"Peace Lily Domino",
        img: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/detail-Spathiphyllum-Domino-Small-1_1000x1000.jpg?v=1602774218',
        light: 'Low to Medium Indirect',
        details: 'The Peace Lily Domino is a show stopper! The large and lush leaves come to a point and feature green and white marbled variegation.  This plant will arrive without the stunning white flowers that feature a single pointed petal, or bract, that curves around a spiky spadix—but the blooms will come!   Each time the plant blooms, the flowers can last for months.  This easy-care houseplant will add beautiful greenery to any space in your home. '
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {});
  }
};
