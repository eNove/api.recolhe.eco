const collectionPointSchema = require('../models/collectionPointModel');


exports.listPoints = [
    {
        name: 'Andrew',
        description: 'teste do teste',
        photo_path: './algum lugar',
        location:{
            city: 'Jundiaí',
            UF: 'SP',
            geo_location: {
                latitude: '1998213217.0',
                longitude: '1998213217.5'
            },
            country: 'Brasil'
        }
    },
    {
        name: 'Andrew 2',
        description: 'teste do teste',
        photo_path: './algum lugar',
        location:{
            city: 'Jundiaí',
            UF: 'SP',
            geo_location: {
                latitude: '1998213217.0',
                longitude: '1998213217.5'
            },
            country: 'Brasil'
        }
    },
    {
        name: 'Andrew 3',
        description: 'teste do teste',
        photo_path: './algum lugar',
        location:{
            city: 'Jundiaí',
            UF: 'SP',
            geo_location: {
                latitude: '1998213217.0',
                longitude: '1998213217.5'
            },
            country: 'Brasil'
        }
    }
];
