const mongoose = require('mongoose');
const collectionPointSchema = require('../models/collectionPointModel');

collectionPointSchema.statics = {
    create_point: function(data, cb) {
        (new this(data)).save(cb);
    },

    get_point: function(query, cb) {
        this.find(query, cb);
    },

    update_point: function(query, updatedata, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete_point: function(query, cb) {
        this.findOneAndDelete(query, cb, () => {});
    }/**/
};

module.exports = mongoose.model('collectionPoints', collectionPointSchema);
