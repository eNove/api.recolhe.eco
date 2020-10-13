var collectionPoints = require('../controllers/collectionPointController');

module.exports = (app) => {
    app.route('/pontos-de-coleta')
        .post(collectionPoints.create_collection_point)
        .get(collectionPoints.get_all_collectionPoints);
    
    app.route('/pontos-de-coleta/:name')
        .get(collectionPoints.get_collection_point);
    
    app.route('/pontos-de-coleta/:id')
        .put(collectionPoints.update_collection_point)
        //.delete(collectionPoints.remove_point);
}
