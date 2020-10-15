var collectionPoints = require('../controllers/collectionPointController');

module.exports = (app) => {
    app.route('/lista-points')
        .get(collectionPoints.get_all_collectionPoints);

}
