const conection = require('../database/conection');



module.exports = {
    async index(request, response){
        const insidents = await conection('insidents').select('*');
        return response.json(insidents);
    },


    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await conection('insidents').insert({
            title,
            description,  
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const insidents = await conection('insidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(insidents.ong_id != ong_id){
            return response.status(401).json({error: 'Operação não permitida.'})
        }
        
        await conection('insidents').where('id', id).delete();
        return response.status(201).send();
    }
};