const express = require('express');

const cors = require('cors')

const imagePathMiddleware = require('./middlewares/imagePath.js')

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(cors({ origin: process.env.FE_APP }));

app.use(imagePathMiddleware)

app.use(express.json());

const filmRouter = require('./router/films.js');
app.use('/films', filmRouter)

app.get("/", (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Server aperto sulla porta " + port)
})