//Importar conexão
const connection = require('../database/connection');

//Importar Crypto para gerar id aleatório
const crypto = require('crypto');

//Exportar objeto com os metodos
module.exports = {

    //Listar Ongs
    async index (request, response) {

        //Selecionar ongs
        const ongs = await connection('ongs').select('*');
    
        //Retornar array de ongs
        return response.json(ongs);
    },

    //Criar nova Ong
    async create(request, response){
        
        //Corpo da requisição
        const { name, email, whatsapp, city, uf } = request.body; 

        //id aleatório
        const id = crypto.randomBytes(4).toString('HEX');

        //Cadastrar nova Ong
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}
