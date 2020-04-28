const router =  require('express').Router()
const article = require('./article')
const newYorkTimes = require('./newYokTimes')


router.use('/articles',article)
router.use('/news', newYorkTimes)

module.exports =  router