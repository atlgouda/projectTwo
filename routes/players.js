var express = require('express');
var router = express.Router({ mergeParams : true });
const { Team, Player } = require('../db/schema')

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
router.get('/new', (req, res) => {
    res.render('players/new',  {
        teamId: req.params.teamId,
    })
})

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
router.post('/', (req, res) => {
    Team.findById(req.params.teamId)
    .then((team) => {
        const newPlayer = new Player(req.body)
        team.players.push(newPlayer)
        return team.save()
    })
    .then(() => {
        res.redirect(`/teams/${req.params.teamId}/players`)
    })
})

//UPDATE

//DELETE

module.exports = router;