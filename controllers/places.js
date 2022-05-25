const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
    console.log("Tried new")
    res.render('places/new', {places})

})
router.get('/:index', (req, res,) => {
  let index = req.params.index;
  if(isNaN(index) | !places[index]) res.render('error404')
  res.render('places/details', places[index] )
})
router.get('/', (req, res,) => {      
    res.render('places/index', { places })
})
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect(`places/${places.length - 1}`)
})

module.exports = router
