const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
    console.log("Tried new")
    res.render('places/new', {places})

})
router.get('/:index/edit', (req, res) => {
  console.log("route edit")
  let index = Number(req.params.index)
  if (isNaN(index)) {
      res.render('error404')
  }
  else if (!places[index]) {
      res.render('error404')
  }
  else {
    console.log("no error here")
    res.render('places/edit', { place: places[index], index })
  }
})
router.get('/:index', (req, res,) => {
  let index = req.params.index;
  if(isNaN(index) | !places[index]) res.render('error404')
  res.render('places/details', { place:places[index], index } )
})
router.get('/', (req, res,) => {      
    res.render('places/index', { places })
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
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
router.delete('/:index', (req, res) => {
  console.log("Deleted place")
  let index = Number(req.params.index)
  if (isNaN(index)) {
    res.render('error404')
  }
  else if (!places[index]) {
    res.render('error404')
  }
  else {
    places.splice(index, 1)
    res.render('places/index', {places})
  }
})


module.exports = router
