var collectionPoints = require('../controllers/collectionPointController');

module.exports = (app) => {
    app.route('pontos-de-coleta')
        .post(collectionPoints.createCollectionPoint)
        .get(collectionPoints.get_all_collectionPoints);
    
    app.route('pontos-de-coleta/:name')
        .get(collectionPoints.getCollectionPoint)
    
    app.route('pontos-de-coleta/:id')
        .put(collectionPoints.updateCollectionPoint)
        //.delete(collectionPoints.remove_point)
}
