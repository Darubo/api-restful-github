const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const RepositoryController = require('./modules/repository/RepositoryController');
const RepositoryService = require('./modules/repository/RepositoryService');
const RepositoryRepository = require('./modules/repository/RepositoryRepository');

const repositoriesData = require('./databases/repositories.json');
const repositoryRepository = new RepositoryRepository(repositoriesData);
const repositoryService = new RepositoryService(repositoryRepository);
const repositoryController = new RepositoryController(repositoryService);

// Rota para buscar repositórios pelo nome
app.get('/repositories', (req, res) => {
  repositoryController.searchRepositories(req, res);
});

// Rota para obter dados de um repositório por ID
app.get('/repositories/:repoId', (req, res) => {
  repositoryController.getRepositoryById(req, res);
});

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicializar o servidor
const porta = process.env.PORT || 3000;
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}...`));
