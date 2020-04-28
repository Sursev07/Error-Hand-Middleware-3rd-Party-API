const router = require('express').Router()
const nytController = require('../controllers/newYorkTimesController')

router.get('/', nytController.getArticleNYT)

module.exports = router