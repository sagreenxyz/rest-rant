const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.status(200).render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.status(202).render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router
