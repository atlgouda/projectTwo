var express = require('express');
var router = express.Router();
const { Team } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req, res) => {
  Team.find()
  .then((teams) => {
    res.render('teams/index', {teams})
  })
})

//NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('teams/new')
})

//SHOW,SHOW ONE
router.get('/:id', (req,res) => {
  Team.findById(req.params.id)
  .then((team) => {
    res.render('teams/show', { team })
  })
})
//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  Team.findById(req.params.id)
  .then((team) => {
    res.render('teams/edit', { team })
  })
})
//CREATE
router.post('/', (req, res) => {
  Team.create(req.body)
  .then((team) => {
    res.redirect(`/teams/${team._id}`)
  })
})
//UPDATE
router.put('/:id', (req, res) => {
  Team.findByIdAndUpdate(req.params.id, req.body)
  .then((team) => {
    res.redirect(`/teams/${team._id}`)
  })
})
//DELETE
router.delete(':/id', (req, res) => {
  Team.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/teams')
  })
})

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
