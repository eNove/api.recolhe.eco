var collectionPointsRepository = require('../repository/collectionPointRepository');
/*
exports.create_collection_point = async (req, res) => {
    var colPoint = {
        name: req.body.name,
        description: req.body.description,
        created_by: "",
        location: req.body.location
    };

    try{
        await collectionPointsRepository.create_point(colPoint, (err, colPoint) => {
            if(err)
                res.json({ error: err })
    
            res.status(200).json(colPoint)
        });
    }
    catch(e) {
        res.status(500).send({message: 'Falha ao cadastrar ponto de coleta.'});
    }
    
};
/*
exports.get_collection_point = (req, res, next) => {
    collectionPointsRepository.get_point({name: req.params.name}, (err, colPoint => {
        if(err)
            res.json({ error: err })

        res.json({ collection_point: colPoint });
    }))
}; */

exports.get_all_collectionPoints = (req, res, next) => {
    collectionPointsRepository.get_point({}, (err, colPoints) => {
        if(err)
            res.json({ error: err });
        
        res.json({ collection_points: colPoints });
    })
};
/*
exports.update_collection_point = (req, res, next) => {
    var colPoint = {
        name: req.body.name,
        description: req.body.description,
        photo_path: req.body.photo_path,
        location: req.body.location
    };

    collectionPointsRepository.update_point({_id: req.params.id}, colPoint, (err, colPoint) => {
        if(err)
            res.json({ error: err });
        
        res.json({ message: "Ponto de coleta atualizado." });
    });

    exports.remove_point = (req, res, next) => {
        collectionPointsRepository.delete_point({_id: req.params.id}, (err, colPoint) => {
            if(err)
                res.json({ error: err });
        
            res.json({ message: "Ponto de coleta removido com sucesso." });
        });
    } 
};
*/


