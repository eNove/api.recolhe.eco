var express = require('express');
var router = express.Router();

var collectionPoints = require('../controllers/collectionPointController');
/*
module.exports = (app) => {
    app.route('/pontos-de-coleta')
        .post(collectionPoints.create_collection_point)
        .get(collectionPoints.get_all_collectionPoints);
    
    app.route('/pontos-de-coleta/:name')
        .get(collectionPoints.get_collection_point);
    
    app.route('/pontos-de-coleta/:id')
        .put(collectionPoints.update_collection_point)
        //.delete(collectionPoints.remove_point);
        //TODO: verificar pq o delete esta dando erro
        */

    //router.post('/pontos-de-coleta', collectionPoints.create_collection_point)
    router.get('/pontos-de-coleta', collectionPoints.get_all_collectionPoints)

module.exports = router;