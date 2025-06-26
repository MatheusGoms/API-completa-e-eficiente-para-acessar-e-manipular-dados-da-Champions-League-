const teams = require('../models/teamModel');

// Lógica para obter todas as equipes
exports.getAllTeams = () => teams;

// Lógica para obter equipe por ID
exports.getTeamById = (id) => teams.find((team) => team.id === parseInt(id));
