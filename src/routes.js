const express = require('express');
const ongController = require('./controllers/ongsController');
const insidentsController = require('./controllers/insidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/insidents', insidentsController.create);
routes.get('/insidents', insidentsController.index);
routes.delete('/insidents/:id',insidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.index);

module.exports = routes;