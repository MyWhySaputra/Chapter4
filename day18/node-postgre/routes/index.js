const user = require('./user');
const photo = require('./photo');

module.exports = app => {
    app.use('/user', user);
    app.use('/photo', photo);
    // etc..
}