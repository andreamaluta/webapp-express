const connection = require('../data/db.js')

function index(req, res) {
    res.send('Lista dei post')
}

function show(req, res) {
    res.send('Dettaglio del post')
}

module.exports = { index, show }