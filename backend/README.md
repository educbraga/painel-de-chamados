# Backend - API REST de Chamados

> API REST simulada para gerenciamento de chamados (tickets) de suporte, desenvolvida com JSON Server.

## 📋 Sobre o Projeto

Este backend fornece uma API REST para o **Painel de Chamados**, permitindo criar e listar tickets de suporte técnico. É uma solução rápida e prática para desenvolvimento e testes, sem necessidade de configurar um banco de dados real.

### O que você encontrará aqui:

- API REST com JSON Server
- 10 tickets de exemplo pré-cadastrados para testes
- 3 categorias de chamados: Suporte, Infra e Cobrança
- Rotas para listar e criar tickets
- Rota para listar categorias
- Persistência em arquivo JSON

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)

### Instalar dependências

```bash
npm install
```

### Como executar o servidor

```bash
npm start
```

O servidor deve iniciar em `http://localhost:3000` e deve permanecer em execução para que a API funcione corretamente.

O JSON Server cria automaticamente rotas REST baseadas no `db.json` e persiste os dados nesse arquivo.

## 🧪 Testando as Rotas

### Listar categorias

```bash
GET http://localhost:3000/categories
```

Retorna: Suporte, Infra e Cobrança

### Listar tickets

```bash
GET http://localhost:3000/tickets
```

Retorna: 10 tickets de exemplo pré-cadastrados, mais quaisquer tickets criados durante a execução.

### Criar novo ticket

```bash
POST http://localhost:3000/tickets
Content-Type: application/json

{
  "title": "Título do chamado",
  "description": "Descrição detalhada",
  "category": "Suporte"
}
```

## 📊 Estrutura de Dados

### Ticket

```json
{
  "id": "a3f2",
  "title": "Erro no login",
  "description": "Usuário não entra",
  "category": "Suporte"
}
```

### Category

```json
{
  "id": "Suporte"
}
```

## ❗ Troubleshooting

**Porta 3000 já em uso:**

```bash
# Encontrar processo usando a porta 3000
lsof -ti:3000

# Encerrar o processo
kill -9 $(lsof -ti:3000)
```

**Alterações no db.json não aparecem:**

- Reinicie o servidor após modificar o `db.json` manualmente

## Licença

Este projeto está licenciado sob a Licença MIT.
