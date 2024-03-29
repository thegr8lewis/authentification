const express = require('express')


//controller function
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all work outs
router.get('/', getWorkouts)


//GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)


//delete a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)



module.exports = router