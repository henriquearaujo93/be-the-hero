//Importar Knex
const knex = require('knex');

//Importar configuraçõs da base de dados disponivel
const configuration = require('../../knexfile');

//Criar conexão de desenvolvimento
const connection = knex(configuration.development);

//Exportar conexão
module.exports = connection;