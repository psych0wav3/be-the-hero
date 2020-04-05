const conection = require('../database/conection');

module.exports = {
    async index(request, response){
        const { id } = request.body;
        const ong = await conection('ongs')
        .where('id', id)
        .select('nome')
        .first();
        
        if(!ong){
            response.status(400).json({error: 'usuario não existe'}); 
        }

        return response.json(ong); 
    }
}