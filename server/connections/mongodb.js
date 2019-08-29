const mongoose = require('mongoose');

let proccessMongo = async() => {
    return mongoose.connect('mongodb://localhost:27017/empresa', { useNewUrlParser: true })
        .then((res) => {
            return true;
        })
        .catch((err) => {
            throw (err);
        });
}

module.exports = {
    proccessMongo
}