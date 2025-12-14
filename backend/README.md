# Backend

## 📝 Notas

- JSON Server cria automaticamente rotas REST baseadas no `db.json`
- `/tickets` e `/categories` estarão disponíveis automaticamente
- O servidor precisa ficar rodando enquanto utilizamos o frontend

### Instalar dependências

```bash
npm install
```

### Como executar o servidor

```bash
npm start
```

O servidor deve iniciar em `http://localhost:3000`

Teste acessando:
- `http://localhost:3000/categories` - deve retornar as categorias suporte, infra e cobrança.
- `http://localhost:3000/tickets` - deve retornar array vazio