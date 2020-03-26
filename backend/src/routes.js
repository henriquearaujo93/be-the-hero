//Importar funcionalidades do express
const express = require('express');

//Importar controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Importar Router
const routes = express.Router();

//Rota para login
routes.post('/sessions', SessionController.create);

//Rota para listar Ongs
routes.get('/ongs', OngController.index);

//Rota para criar nova ong
routes.post('/ongs', OngController.create);

//Rota para criar novo caso
routes.post('/incidents', IncidentController.create);

//Rota para listar casos
routes.get('/incidents', IncidentController.index);

//Rota para deletar incidente
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para retornar incidentes da ong logada
routes.get('/profile', ProfileController.index);

//Exportar rotas
module.exports = routes;