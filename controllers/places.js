const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).render('places/index')
})

module.exports = router
