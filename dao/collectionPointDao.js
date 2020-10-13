const mongoose = require('mongoose');
const collectionPointSchema = require('../models/collectionPointModel');

collectionPointSchema.statics = {
    create_point: (data, cb) => {
        (new this(data)).save(cb);
    },
    get_point: (query, cb) => {
        this.find(query, cb);
    },
    update_point: (query, updatedata, cb) => {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    delete_point: (query, cb) => {
        this.findOneAndDelete(query, cb);
    }/**/
};

module.exports = mongoose.model('collectionPoints', collectionPointSchema);