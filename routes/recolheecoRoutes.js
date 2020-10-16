var collectionPoints = require('../controllers/collectionPointController');

module.exports = (router) => {

    router.post('/pontos-de-coleta', collectionPoints.create_ponto_de_coleta);
    router.get('/pontos-de-coleta', collectionPoints.get_all_pontos_de_coleta);
    router.get('/pontos-de-coleta/:id', collectionPoints.get_ponto_de_coleta_by_id);
    router.put('/pontos-de-coleta/:id', collectionPoints.update_ponto_de_coleta);
    router.delete('/pontos-de-coleta/:id', collectionPoints.delete_ponto_de_coleta);
    router.get('/pontos-de-coleta/municipio/:ibge', collectionPoints.get_pontos_by_ibge);
    router.get('/pontos-de-coleta/municipio/:ibge/cep/:cep', collectionPoints.get_pontos_by_ibge_cep);
    router.get('/pontos-de-coleta/municipio/:ibge/material/:idMaterial', collectionPoints.get_pontos_by_ibge_material);
    router.get('/pontos-de-coleta/municipio/:ibge/material/:idMaterial', collectionPoints.get_pontos_by_ibge_material);
}
