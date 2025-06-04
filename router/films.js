const express = require('express')
const router = express.Router();

const filmsController = require('../controller/filmController')

router.get('/', filmsController.index);

router.get('/:id', filmsController.show);

router.post('/:id/reviews', filmsController.storeReview)


module.exports = router;