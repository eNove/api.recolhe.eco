var collectionPointsDao = require('../dao/collectionPointDao');

exports.get_all_collectionPoints = (req, res, next) => {
    res.json(collectionPointsDao.listPoints);
};

exports.get_all_pontos_de_coleta = (req, res, next) => {
    res.json(collectionPointsDao.pontos_de_coleta);
};

