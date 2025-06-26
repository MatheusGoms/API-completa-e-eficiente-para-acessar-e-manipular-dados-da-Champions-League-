const teamsService = require('../services/teamsService');

// Listar todas as equipes
exports.getAllTeams = (req, res) => {
  const teams = teamsService.getAllTeams();
  res.json(teams);
};

// Obter equipe por ID
exports.getTeamById = (req, res) => {
  const { id } = req.params;
  const team = teamsService.getTeamById(id);
  if (!team) {
    return res.status(404).json({ error: 'Equipe não encontrada' });
  }
  res.json(team);
};
