var collectionPointsDao = require('../dao/collectionPointDao');

exports.get_all_pontos_de_coleta = (req, res) => {
    res.json(collectionPointsDao.pontos_de_coleta);
};

exports.get_ponto_de_coleta_by_id = async (req, res) => {
    var ponto_de_coleta = await collectionPointsDao.pontos_de_coleta.find(ponto => ponto.id === req.params.id);
    res.json(ponto_de_coleta);
}

exports.get_ponto_de_coleta_by_nome = async nome => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta.filter(ponto => ponto.nome === nome);
    res.json(pontos_de_coleta);
}

exports.get_ponto_de_coleta_by_municipio_nome = async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta
                            .filter(ponto => ponto.endereco.municipio === req.params.nome);
    res.json(pontos_de_coleta);
}

exports.get_pontos_by_ibge = async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta.filter(o => o.endereco.ibge === parseInt(req.params.ibge))
    res.json(pontos_de_coleta);
}

exports.get_pontos_by_ibge_cep = async (req, res) => {
    var pontos_de_coleta = await collectionPointsDao.pontos_de_coleta
                                    .filter(ponto => ponto.endereco.ibge === req.params.ibge 
                                        && ponto.endereco.cep === req.params.cep);
    res.json(pontos_de_coleta);
}