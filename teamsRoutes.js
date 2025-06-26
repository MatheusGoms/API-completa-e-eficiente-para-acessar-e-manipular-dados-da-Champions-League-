const express = require('express');
const teamsController = require('../controllers/teamsController');

const router = express.Router();

// Define as rotas
router.get('/', teamsController.getAllTeams); // Listar todas as equipes
router.get('/:id', teamsController.getTeamById); // Obter equipe por ID

module.exports = router;
