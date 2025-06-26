const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importa as rotas
const teamsRoutes = require('./routes/teamsRoutes');
const playersRoutes = require('./routes/playersRoutes');
const matchesRoutes = require('./routes/matchesRoutes');
const standingsRoutes = require('./routes/standingsRoutes');

const app = express();

// Configurações de middleware
app.use(cors());
app.use(bodyParser.json());

// Uso das rotas
app.use('/api/teams', teamsRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/standings', standingsRoutes);

module.exports = app;
