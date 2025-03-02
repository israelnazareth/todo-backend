# Todo Backend

Este é o backend de uma aplicação de gerenciamento de tarefas (To-Do List) desenvolvido com Node.js, Express, TypeScript e MongoDB. O projeto segue uma arquitetura organizada com separação de responsabilidades entre controllers, services, models e middlewares.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para criação da API
- **TypeScript** - Superset do JavaScript com tipagem estática
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para interação com MongoDB
- **Zod** - Validação de dados
- **Docker** - Containerização da aplicação

## Estrutura do Projeto

```
├── src/
│   ├── config/          # Configuração do banco de dados
│   ├── controllers/     # Controladores das requisições HTTP
│   ├── models/          # Definição dos modelos do MongoDB
│   ├── routes/          # Definição das rotas da API
│   ├── services/        # Lógica de negócio e interação com os models
│   ├── middlewares/     # Middlewares para autenticação e validação
│   ├── schemas/         # Validação de dados com Zod
│   ├── server.ts        # Inicialização do servidor Express
│
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
├── Dockerfile           # Dockerfile para containerização
├── docker-compose.yml   # Configuração do ambiente Docker

```

## Configuração do Ambiente

### 1. Clonar o repositório

```sh
git clone git@github.com:israelnazareth/todo-backend.git
cd todo-backend
```

### 2. Instalar dependências

```sh
npm install
```

### 3. Rodar o projeto

#### Com Docker

```sh
docker-compose up --build
```

## Rotas da API

### **Usuários** (`/users`)

- **POST** `/` - Criar um novo usuário
- **GET** `/` - Listar todos os usuários
- **GET** `/:id` - Resgatar um usuário
- **PUT** `/:id` - Atualizar um usuário
- **DELETE** `/:id` - Remover um usuário e as tarefas associadas a ele

### **Tarefas** (`/tasks`)

- **POST** `/` - Criar uma nova tarefa
- **GET** `/` - Listar todas as tarefas
- **GET** `/:id` - Resgatar uma tarefa
- **PUT** `/:id` - Atualizar uma tarefa
- **DELETE** `/:id` - Remover uma tarefa

## Licença

Este projeto está sob a licença MIT. Para mais detalhes, veja o arquivo `LICENSE`.

---

Feito com ❤️ por [Israel Nazareth](https://github.com/israelnazareth).
