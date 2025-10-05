# Sistema de Gerenciamento de Estoque

Este sistema foi desenvolvido para uma empresa que precisava gerenciar o estoque de ferramentas e itens dos funcionários. O objetivo é controlar cadastro, consulta, criação, atualização e exclusão de produtos (ferramentas e itens) e gerenciar usuários que acessam o sistema.

Principais funcionalidades

- Cadastro de produtos (ferramentas e itens) com nome, tipo, descrição e quantidade.
- Listagem de produtos e consulta por ID.
- Criação, edição e remoção de produtos.
- Cadastro e autenticação de usuários (registro e login) com geração de token JWT.
- Rotas protegidas para operações que requerem autenticação.
- Cadastro e autenticação de um único usuário responsável (admin). Somente esse usuário terá permissão para gerenciar o estoque.
- Rotas protegidas para operações que requerem autenticação (apenas o usuário responsável pode acessar).

Como rodar

1. Instale as dependências:

```powershell
npm install
```

2. Configure variáveis de ambiente (recomendado)

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
MONGO_URI=seu_uri_mongodb_aqui
JWT_SECRET=seu_segredo_jwt_aqui
PORT=3000
```

> Observação: atualmente o projeto contém a URI do MongoDB e a chave JWT no código fonte. Para produção, substitua esses valores por variáveis de ambiente.

3. Rodar em modo desenvolvimento (com nodemon):

```powershell
npm run dev
```

4. Rodar em produção:

```powershell
npm start
```

Endpoints principais

- GET /produtos - lista todos os produtos
- GET /produtos/:id - busca produto por ID
- POST /produtos - cria um novo produto
- PUT /produtos/:id - atualiza um produto
- DELETE /produtos/:id - remove um produto

- POST /users/register - registra novo usuário
- POST /users/login - autentica usuário e retorna token
- GET /users - lista usuários (rota protegida)

OBS: O sistema foi projetado para ter apenas um cadastro de usuário responsável (administrador). O endpoint `POST /users/register` existe para criar esse usuário inicialmente; após a criação, apenas esse usuário deverá acessar o sistema para gerenciar o estoque.

Observações e melhorias sugeridas

- Mover segredos e URIs para variáveis de ambiente (implementei instruções no .env).
- Adicionar validações mais completas nas entradas (ex.: joi, express-validator).
- Adicionar testes automatizados e fluxo de CI/CD.
- Melhorar tratamento de erros e logs.

Licença

Projeto interno — adapte conforme necessário.
