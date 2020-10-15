const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var collectionPointSchema = new Schema({
    name:{
        type: String,
        unique: false,
        required: false
    },
    description: {
        type: String,
        unique: false,
        required: false
    }
});
//TODO: complement this model

module.exports = mongoose.model('PontosDeColeta', collectionPointSchema);
