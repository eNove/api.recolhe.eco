const mongoose = require('mongoose');
const collectionPoints = mongoose.model('PontosDeColeta');

exports.create_point = async (data, cb) => {
    return await (new this(data)).save(cb);
}

exports.get_point = async (query, cb) => {
    return await collectionPoints.find(query, cb);
}

exports.update_point = async (query, updateData, cb) => {
    return await collectionPoints.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
}

exports.delete_point = async (query, cb) => {
    return await collectionPoints.findOneAndDelete(query, cb);
}
