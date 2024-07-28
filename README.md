# Aprova Backend

Backend com endpoint de listagem de processos e endpoint para buscar o histórico de um processo.

# Como rodar o projeto

Primeiramente crie um arquivo .env na raiz do projeto com a porta PORT=3000

- Docker (recomendado):

  Rodar o container de desenvolvimento com o comando

```bash
  docker compose up
```

- Sem docker:

  Rode os seguintes comandos em sequência para rodar localmente

```bash
  npm i
  npm run start:dev
```

# Como rodar os testes

- Testes unitários:

  Para rodar os testes unitários basta rodar o seguinte comando

```bash
  npm run test:unit
```

- Testes de integração:

  Para rodar os testes de integração basta rodar o seguinte comando

```bash
  npm run test:integration
```
