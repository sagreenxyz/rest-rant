const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.status(200).render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.status(202).render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send('POST /places stub')
})

module.exports = router
