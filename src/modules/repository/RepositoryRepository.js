class RepositoryRepository {
  constructor(repositoriesData) {
    this.repositoriesData = repositoriesData;
  }

  filterByName(name) {
    if (!this.repositoriesData) {
      throw new Error('Dados dos repositórios não foram carregados.');
    }

    const filteredRepositories = this.repositoriesData.repositories.filter(repo =>
      repo.name.includes(name)
    );

    return filteredRepositories;
  }

  findById(id) {
    if (!this.repositoriesData) {
      throw new Error('Dados dos repositórios não foram carregados.');
    }

    const repository = this.repositoriesData.repositories.find(repo => repo.id === id);

    return repository;
  }
}

module.exports = RepositoryRepository;
