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
    const { id } = req.params

    const filmSql = `SELECT * FROM movies WHERE id = ?`;

    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`

    connection.query(filmSql, [id], (err, filmResults) => {
        if (err) {
            return res.status(500).json({ error: "database query failed: " + err });
        }

        const film = filmResults[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) {
                return res.status(500).json({ error: "database query failed: " + err });
            }
            film.reviews = reviewsResults;
            res.json(film);
        })
    })
}

module.exports = { index, show }