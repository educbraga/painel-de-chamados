# Frontend - Painel de Chamados

Interface web responsiva para gerenciamento de tickets de suporte técnico, desenvolvida com Angular 21.

## 🚀 Começando

### 📋 Pré-requisitos

- Node.js (versão 20 ou superior Par)
- npm
- Backend rodando em `http://localhost:3000` (ver [../backend/README.md](../backend/README.md))

> 💡 Se você usa nvm: `nvm install && nvm use`

### 🔧 Instalação

```bash
cd frontend
npm install
npm start
```

Acesse http://localhost:4200/ — a aplicação recarrega automaticamente ao modificar arquivos.

## ⚙️ Testes

```bash
npm test
```

## 📦 Build de Produção

```bash
npm run build
```

Arquivos gerados em `dist/`.

## 🛠️ Construído com

| Tecnologia      | Justificativa                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Angular 21**  | Framework robusto com excelente suporte a TypeScript, arquitetura baseada em componentes e ferramentas como a Angular CLI que aceleram o desenvolvimento. |
| **TypeScript**  | Superset que reduz erros em tempo de desenvolvimento através de tipagem estática, melhorando a manutenibilidade do código.                                |
| **Angular CLI** | Automatiza tarefas repetitivas (criação de componentes, build, testes), aumentando significativamente a produtividade.                                    |
| **PrimeNG**     | Biblioteca de componentes UI rica e personalizável que acelera o desenvolvimento de interfaces modernas e responsivas com Angular.                        |
| **Vitest**      | Nativo no Angular 21 e possui sintaxe simples e moderna.                                                                                                  |

## 📁 Estrutura

```
src/app/
├── components/
│   ├── create-ticket/   # Formulário de criação
│   ├── tickets/         # Listagem de tickets
│   ├── header/          # Cabeçalho
│   ├── footer/          # Rodapé
│   ├── layout/          # Layout principal
│   └── not-found/       # Página 404
├── services/
│   └── ticket.ts        # Comunicação com API
├── app.routes.ts        # Rotas
└── app.config.ts        # Configuração
```

## 🤖 Uso de IA

- ~30% gerado com auxílio de IA (ajustes, refatorações, correções de bugs, documentação, auxílio na arquitetura, dúvidas sobre a sintaxe e identificação de melhorias de usabilidade e acessibilidade)
- ~70% desenvolvido manualmente ou via CLI
- Ferramentas: GitHub Copilot, Claude Opus 4.5
- Todo código foi revisado manualmente

## 📄 Licença

MIT

---

⌨️ Desenvolvido com Angular e muito café ☕️
