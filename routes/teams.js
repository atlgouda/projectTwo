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

//SHOW,SHOW ONE
router.get('/:id', (req,res) => {
  Team.findById(req.params.id)
  .then((team) => {
    res.render('teams/show', { team })
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
