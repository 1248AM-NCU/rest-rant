const router = require('express').Router()

router.get('/', (req, res,) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thisIsACoffee.png'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/thisIsNot.png'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
