const express = require('express');

const app = express();

const port = process.env.SERVER_PORT || 3000;

const filmRouter = require('./router/films.js');
app.use('/films', filmRouter)

app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Server aperto sulla porta " + port)
})