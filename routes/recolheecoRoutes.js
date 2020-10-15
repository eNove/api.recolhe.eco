var collectionPoints = require('../controllers/collectionPointController');

module.exports = (app) => {
    app.route('/lista-points')
        .get(collectionPoints.get_all_collectionPoints);

    app.route('/pontos-de-coleta')
        .get(collectionPoints.get_all_pontos_de_coleta);
}
