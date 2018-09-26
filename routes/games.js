var express = require('express');
var router = express.Router({ mergeParams: true });
const { Team, Game } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {
            res.render('games/index', {
                teamId: req.params.teamId,
                games: team.games
            })
        })
        .catch(error => {
            console.log(error)
        })
})
//NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    res.render('games/new', {
        teamId: req.params.teamId,
    })
})
//SHOW, SHOW ONE
router.get('/:id', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {
            res.render('games/show', {
                teamId: req.params.teamId,
                game: team.games.id(req.params.id)
            })
        })
})
//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {

            res.render('games/edit', {
                teamId: req.params.teamId,
                gameId: req.params.id

            })
        })
})
//CREATE
router.post('/', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {
            const newGame = new Game(req.body)
            team.games.push(newGame)
            return team.save()
        })
        .then(() => {
            res.redirect(`/teams/${req.params.teamId}/games`)
        })
})
//UPDATE
router.put('/:id', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {
            team.games.id(req.params.id).set(req.body)
            return team.save()
        })
        .then(() => {
            res.redirect(`/teams/${req.params.teamId}/games/${req.params.id}`)
        })
})
//DELETE
router.delete('/:id', (req, res) => {
    Team.findById(req.params.teamId)
        .then((team) => {
            team.games.remove(req.params.id)
            return team.save()
        })
        .then(() => {
            res.redirect(`/teams/${req.params.teamId}/games`)
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router;