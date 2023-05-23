class RepositoryController {
  constructor(repositoryService) {
    this.repositoryService = repositoryService;
  }

  searchRepositories(req, res) {
    const nome = req.query.nome;
    const pagina = parseInt(req.query.pagina) || 1;
    const itensPorPagina = parseInt(req.query.por_pagina) || 10;
    try {
      const resultadosPaginados = this.repositoryService.searchRepositoriesByName(nome, pagina, itensPorPagina);
      res.json(resultadosPaginados);
    } catch (error) {
      res.status(500).json({ mensagem: error.message });
    }
  }

  getRepositoryById(req, res) {
    const id = req.params.repoId;
  
    try {
      const repository = this.repositoryService.getRepositoryById(id);
      if (repository) {
        res.json(repository);
      } else {
        res.status(404).json({ mensagem: 'Repositório não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensagem: error.message });
    }
  }
  
}

module.exports = RepositoryController;
