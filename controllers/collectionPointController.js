var collectionPointsDao = require('../dao/collectionPointDao');

exports.get_all_pontos_de_coleta = (req, res) => {
    res.json(collectionPointsDao.pontos_de_coleta);
};

exports.get_ponto_de_coleta_by_id = async (req, res) => {
    var ponto_de_coleta = await collectionPointsDao.pontos_de_coleta.filter(ponto => ponto.id === req.params.id);
    res.json(ponto_de_coleta);
}

exports.get_pontos_by_ibge = async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta
                                    .filter(o => { return o.endereco.ibge === parseInt(req.params.ibge)});
    res.json(pontos_de_coleta);
}

exports.get_pontos_by_ibge_cep = async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta
                                    .filter(ponto => { return ponto.endereco.ibge === parseInt(req.params.ibge) 
                                        && ponto.endereco.cep === req.params.cep });
    res.json(pontos_de_coleta);
}

exports.get_pontos_by_ibge_material= async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta
                                    .filter(ponto => { return ponto.endereco.ibge === parseInt(req.params.ibge)
                                        && ponto.tipoMaterial.some(o => o.id === req.params.idMaterial)});
    res.json(pontos_de_coleta);
}

exports.create_ponto_de_coleta = async (req, res) => {
    var fake_id = Math.floor(Math.random() * 10000) % 9999;
    res.json({"id": fake_id});
}

exports.update_ponto_de_coleta = (req, res) => {
    res.json(collectionPointsDao.pontos_de_coleta[0]);
}

exports.delete_ponto_de_coleta = (req, res) => {
    res.status(200).json({"message": "Successfully deleted"});
}