var collectionPoints = require('../controllers/collectionPointController');

module.exports = (router) => {

    router.get('/pontos-de-coleta', collectionPoints.get_all_pontos_de_coleta);
    router.get('/pontos-de-coleta/:id', collectionPoints.get_all_pontos_de_coleta);
    router.get('/pontos-de-coleta/municipio/:ibge', collectionPoints.get_pontos_by_ibge);
    router.get('/pontos-de-coleta/municipio/:ibge/cep/:cep', collectionPoints.get_pontos_by_ibge_cep);
}
