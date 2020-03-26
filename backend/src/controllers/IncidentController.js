const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        //Buscar parametro page dentro do request
        const { page = 1 } = request.query;

        //Contador de casos
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) //Buscar apenas 5 casis
        .offset((page - 1) * 5) //Buscar casos de 5 em 5 por página
        .select([
            "incidents.*",
            'ongs.name',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        //Enviar resposta para o header
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create (request, response) {
        const { title, description, value } = request.body;
        request.headers; //Contexto da requisição

        //Receber o id da ong logada
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permited' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}