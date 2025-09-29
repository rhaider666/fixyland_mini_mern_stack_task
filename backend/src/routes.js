const express = require('express');
const router = express.Router();

const expertController = require('./controllers/experts.controller')
const hotelController = require('./controllers/hotels.controller')
const appointmentController = require('./controllers/appointments.controller')


router.get('/getExperts',expertController.getExperts)
router.get('/getHotels',hotelController.getHotels)
router.post('/addAppointment',appointmentController.addAppointments)


module.exports = router;