// Iteration #1
require('../db')
const mongoose = require('mongoose')

let DroneModel = require('../models/Drone.model')

DroneModel.insertMany([
    {name: 'Creeper', propellers: 4 , maxSpeed:20},
    {name: 'Stalker', propellers: 4, maxSpeed: 14},
    {name: 'Seabird', propellers: 3, maxSpeed: 16}
    
])

.then(() => {
    console.log('Data inserted')
    mongoose.connection.close()
})
.catch((err) => {
    console.log('Error ', err)
    mongoose.connection.close()
})
