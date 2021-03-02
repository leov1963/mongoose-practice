const mongoose = require('mongoose');

configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect('mongodb://localhost/familyTree', configOptions);

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
    console.log('!!!!!Error: ', err);
});

module.exports = {
    User: require('./user')
}