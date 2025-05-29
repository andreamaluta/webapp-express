const connection = require('../data/db.js')

function index(req, res) {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        console.log(results);
        res.json(results);
    });

}

function show(req, res) {
    res.send('Dettaglio del post')
}

module.exports = { index, show }