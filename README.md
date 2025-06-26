Passo a Passo para Implementação
1. Configuração Inicial do Projeto
Crie um diretório para o projeto e inicialize o npm:


mkdir champions-league-api
cd champions-league-api
npm init -y


Instale as dependências principais:
npm install express body-parser cors dotenv

Instale dependências de desenvolvimento:
npm install --save-dev nodemon

Adicione os scripts no package.json:

jsonCopiar código
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node src/index.js"
}
