const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
    res.status(200).render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.status(202).render('places/new')
})

router.post('/', (req, res) => {
    res.status(200).send('POST /places stub')
})

module.exports = router
