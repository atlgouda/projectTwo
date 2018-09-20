var express = require('express');
var router = express.Router({ mergeParams : true });
const { Team } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req, res) => {
    Team.findById(req.params.teamId)
    .then((team) => {
        res.render('players/index', {
            teamId: req.params.teamId,
            players: team.players
        })
    })
    .catch(error => {
        console.log(error)
    })
})

//NEW, RENDER NEW FORM

//SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    Team.findById(req.params.teamId)
    .then((team) => {
        res.render('players/show', {
            teamId: req.params.teamId,
        player: team.players.id(req.params.id)
        })
    })
})

//EDIT, RENDER EDIT FORM

//CREATE

//UPDATE

//DELTE

module.exports = router;