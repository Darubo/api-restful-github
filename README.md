
> # UNIVERSIDADE FEDERAL DE MATO GROSSO DO SUL
> MATÉRIA: TADS

> PROFESSOR: HUDSON SILVA BORGES

> ALUNOS: GEFFERSON ALVES DIAS E DIOGO FELIPE


# API RESTful de Repositórios 

Esta é uma API RESTful simples para buscar e obter detalhes de repositórios, utilizando swagger, node e javascript.


# Pré-requisitos

Certifique-se de ter o Node.js instalado em seu computador.

# Instalação

1. Faça o clone deste repositório para o seu computador.

2. Acesse o diretório do projeto:
cd nome-do-diretorio

3. Instale as dependências do projeto:
npm install

# Uso
- Carregue os dados dos repositórios:

- Crie um arquivo repositories.json na raiz do projeto.

- Preencha o arquivo repositories.json com os dados dos repositórios no formato JSON, seguindo o exemplo abaixo:

```
{
  "repositories": [
    {
      "id": "MDEwOlJlcG9zaXRvcnk1NDU0NDAyMw==",
      "name": "repository-1",
      "description": "Description 1"
    },
    {
      "id": "MDEwOlJlcG9zaXRvcnk2NzU2MDM2Nw==",
      "name": "repository-2",
      "description": "Description 2"
    },
    ...
  ]
}
```
## Inicie o servidor:
```
node server.js
```
## Acesse a API RESTful:
1. Buscar repositórios pelo nome:
   - Método: GET

   - URL: http://localhost:3000/repositories?nome={nome}&pagina={pagina}&por_pagina={por_pagina}

   - Parâmetros:
	   - nome: (opcional) Nome do repositório a ser buscado.
	   - pagina: (opcional) Página atual da lista de resultados (padrão: 1).
	   - por_pagina: (opcional) Número de itens por página na lista de resultados (padrão: 10).

2. Obter detalhes de um repositório pelo ID:
   - Método: GET
   - URL: http://localhost:3000/repositories/{repoId}
   - Parâmetros: repoId: ID do repositório.


## Documentação Swagger:
 - Acesse a documentação Swagger em: http://localhost:3000/api-docs

# Bibliotecas utilizadas
 - Express: Framework web para Node.js.
 - Swagger UI Express: Biblioteca para exibir a documentação Swagger.

# Contribuições
Para fazer alterações no projeto. Basta seguir as etapas abaixo:
 - Faça um fork do repositório.
 - Crie um branch para suas alterações:
```git checkout -b minha-alteracao```
 - Faça as alterações necessárias e commit:
```git commit -m "Minha alteração"```
 - Envie suas alterações para o repositório remoto:
```git push origin minha-alteracao```
 - Abra uma solicitação de pull no GitHub.
