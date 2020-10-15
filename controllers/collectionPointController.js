var collectionPointsDao = require('../dao/collectionPointDao');

exports.get_all_collectionPoints = (req, res, next) => {
    res.json(collectionPointsDao.listPoints);
};


