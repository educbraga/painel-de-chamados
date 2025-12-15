# Backend - API REST de Chamados

API REST simulada para gerenciamento de tickets de suporte, desenvolvida com JSON Server.

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js
- npm

> 💡 Se você usa nvm: `nvm install && nvm use`

### 🔧 Instalação

```bash
cd backend
npm install
npm start
```

Servidor disponível em http://localhost:3000

## ⚙️ Rotas

| Método | Rota          | Descrição                                   |
| ------ | ------------- | ------------------------------------------- |
| GET    | `/categories` | Lista categorias (Suporte, Infra, Cobrança) |
| GET    | `/tickets`    | Lista todos os tickets                      |
| POST   | `/tickets`    | Cria novo ticket                            |

### Exemplo de criação

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

```json
// Ticket
{ "id": "a3f2", "title": "Erro no login", "description": "Usuário não entra", "category": "Suporte" }

// Category
{ "id": "Suporte" }
```

## 🛠️ Construído com

- [JSON Server](https://github.com/typicode/json-server) — API REST fake para prototipagem pois permite criar um backend completo com pouco tempo de configuração.

## ❗ Troubleshooting

| Problema                           | Solução                    |
| ---------------------------------- | -------------------------- |
| Porta 3000 em uso                  | `kill -9 $(lsof -ti:3000)` |
| Alterações no db.json não aparecem | Reinicie o servidor        |

## 🤖 Uso de IA

IA utilizada apenas para auxílio desta documentação.

## 📄 Licença

MIT

---

Feito com JSON Server e muito café ☕️
