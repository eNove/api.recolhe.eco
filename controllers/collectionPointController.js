var collectionPointsDao = require('../dao/collectionPointDao');

exports.createCollectionPoint = (req, res, next) => {
    var colPoint = {
        name: req.body.name,
        description: req.body.description,
        created_by: "",
        location: req.body.location
    };

    collectionPointsDao.create_point(colPoint, (err, colPoint) => {
        if(err)
            res.json({ error: err })

        res.json({ message: "Ponto de coleta criado com sucesso." })
    });
};

exports.getCollectionPoint = (req, res, next) => {
    collectionPointsDao.get_point({name: req.params.name}, (err, colPoint => {
        if(err)
            res.json({ error: err })

        res.json({ collection_point: colPoint });
    }))
};

exports.get_all_collectionPoints = (req, res, next) => {
    collectionPointsDao.get_point({}, (err, colPoints) => {
        if(err)
            res.json({ error: err });
        
        res.json({ collection_points: colPoints });
    })
};

exports.updateCollectionPoint = (req, res, next) => {
    var colPoint = {
        name: req.body.name,
        description: req.body.description,
        photo_path: req.body.photo_path,
        location: req.body.location
    };

    collectionPointsDao.update_point({_id: req.params.id}, colPoint, (err, colPoint) => {
        if(err)
            res.json({ error: err });
        
        res.json({ message: "Ponto de coleta atualizado." });
    });

    exports.remove_point = (req, res, next) => {
        collectionPointsDao.delete_point({_id: req.params.id}, (err, colPoint) => {
            if(err)
                res.json({ error: err });
        
            res.json({ message: "Ponto de coleta removido com sucesso." });
        });
    } /**/
};


