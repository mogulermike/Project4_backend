const Plant = require('../models').Plant;
const User = require('../models').User;

const constants = require('../constants');
const UserPlant = require('../models').UserPlant;

const getAll = (req, res) => {
    Plant.findAll()
    .then(plants => {
        res.status(constants.SUCCESS).json(plants)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include : [
            {
            model: UserPlant,
            attributes: ['name']
        }]
    })
    .then(userProfile => {
        res.send(userProfile)
    })
}

const addPlant = (req,res) => {
    console.log(req.params.userId)
    console.log(req.params.plantId)
    UserPlant.create({userId:req.params.userId, plantId:req.params.plantId})
    .then(plants => {
        console.log(plants)
        res.send(plants)
    })
}

const getUserPlants = (req, res) => {
    User.findOne({
        where: {
            id: req.params.userId
        },
        include: [
            {
                model: Plant
            }
        ]
    })
    .then(allPlants => {
        res.send(allPlants)
//         if(allPlants.length > 0){
//             res.status(constants.SUCCESS).json(allPlants);
//         }else{
//             res.status(constants.BAD_REQUEST).send(`ERROR:`);
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
    }  


module.exports = {
    getAll,
    renderProfile,
    addPlant,
    getUserPlants
}
