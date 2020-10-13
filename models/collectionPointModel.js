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
    },
    photo_path:{
        type: String,
        unique: true,
        required: false
    },
    location:{
        city: {
            type: String,
            unique: false,
            required: true
        },
        UF: {
            type: String,
            unique: false,
            required: true
        },
        geo_location:{
            lat: {
                type: String,
                unique: false,
                required: false
            },
            lon: {
                type: String,
                unique: false,
                required: false
            }
        },
        country: {
            type: String,
            unique: false,
            required: true
        }
    },
    created_by:{
        name: {
            type: String,
            unique: false,
            required: false
        },
        id: {
            type: mongoose.Schema.Types.ObjectId
        }
    }
}, {
    timestamps: true
});

module.exports = collectionPointSchema;
