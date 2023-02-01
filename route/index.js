const order = require('./order');
function route(app) {
    app.use('/order',order)
}

module.exports = route