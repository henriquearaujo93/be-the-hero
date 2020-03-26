//Arquivo principal da aplicação

//Importar funcionalidades do express
const express = require('express');

//Importar cors
const cors = require('cors');

//Importar Rotas
const routes = require('./routes');

//Armazenar aplicação
const app = express();

//Utilizar cors na aplicação
app.use(cors());

//Utilizar Json na aplicação
app.use(express.json());

//Utilizar Rotas na aplicação
app.use(routes);

 /**
  * Métodos HTTP:
  * GET - Retorna uma informação do back-end
  * POST - Criar uma informação no back-end
  * PUT - Alterar uma informação no back-end
  * DELETE - Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * Query: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos (id)
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

//A app irá rodar na porta 3333
app.listen(3333); 