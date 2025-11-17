🚀 Estudos de Node.js – Rocketseat

Este repositório reúne meus estudos e práticas do módulo de Node.js da trilha Full Stack da Rocketseat.
Aqui eu registro meus aprendizados, exercícios, código de APIs e conceitos fundamentais do backend com JavaScript.

A ideia é evoluir parte por parte, construindo uma base sólida para atuar como desenvolvedor full stack.

📚 O que estou estudando
🔹 Fundamentos do Node.js

Como o Node funciona por baixo dos panos (event loop, single thread, etc.)

Módulos

HTTP básico

Conceitos essenciais para APIs

🔥 API – Módulo 01

Aqui fica o conteúdo prático: minha primeira API "na mão", sem frameworks.

Conceitos praticados até agora:

Criar um servidor HTTP com Node puro

Rotas GET, POST, PUT, DELETE

Middlewares manuais

Manipulação de JSON

Tratamento de query params, route params e body

Organização de projeto (src/, middlewares/, utils/, etc.)

📁 Estrutura do projeto
src/
 ├─ middlewares/
 │   ├─ jsonBodyHandler.js
 │   └─ routeHandler.js
 ├─ routes.js
 ├─ server.js
 └─ utils/
     ├─ extract-query-params.js
     └─ parseRoutePath.js

README.md
package.json
.gitkeep

🧠 Objetivo deste repositório

Este repositório não é só para guardar código — é pra acompanhar minha evolução, praticar lógica, aprender API de verdade e me preparar para trabalhar como desenvolvedor backend/front-end com segurança.

🚀 Próximos passos

Criar pequenos projetos usando o que aprendi

Evoluir para Fastify/Express

Implementar testes

Criar APIs completas com banco de dados

Documentar tudo

📝 Como rodar o projeto
npm install
npm run dev


Servidor será iniciado em:

http://localhost:3333
