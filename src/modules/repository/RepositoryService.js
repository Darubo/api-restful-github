class RepositoryService {
  constructor(repositoryRepository) {
    this.repositoryRepository = repositoryRepository;
  }

  searchRepositoriesByName(name, page = 1, perPage = 10) {
    const startIndex = (page - 1) * perPage;

    const filteredRepositories = this.repositoryRepository.filterByName(name);

    const paginatedRepositories = filteredRepositories.slice(startIndex, startIndex + perPage);

    return paginatedRepositories;
  }

  getRepositoryById(id) {

    const repository = this.repositoryRepository.findById(id);

    return repository;
  }
}

module.exports = RepositoryService;
