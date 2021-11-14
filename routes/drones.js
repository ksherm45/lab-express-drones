const express = require('express');
const router = express.Router();

// require the Drone model here

const DroneModel = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  const {droneId} = req.params
  DroneModel.findById(droneId)
  .then((drone) => {
      res.render('drones/list.hbs', {drone})
  })
  .catch(() => {
      next('Single drone fetch failed')
  })

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  res.render('drones/create-form.hbs')

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
   console.log(  req.body )
  const {name, propellors, speed} = req.body
  
  DroneModel.create({name, propellors, speed})
    .then(() => {
  
    res.redirect('/')
     })
     .catch(() => {
      next('Drone creation failed')
       })
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {dronesId} = req.params

    DroneModel.findById(dronesId)
        .then((drone) => {
            //render some HBS file with that todo information
            res.render('drones/update-form.hbs', {drone})
        })
        .catch(() => {
            next('Single drone fetch failed')
        })


});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
   const {name, propellors, speed} = req.body

   const {dronesId} = req.params

   DroneModel.findByIdAndUpdate(dronesId, {name, propellors, speed})
       .then(() => {
           res.redirect('/')
       })
       .catch(() => {
           next('Drone Edit failed')
       })



});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const {dronesId} = req.params 
    
  DroneModel.findByIdAndDelete(dronesId)
      .then(() => {
          res.redirect('/')
      })
      .catch(() => {
          next('Drone delete failed')
      })
});

module.exports = router;
