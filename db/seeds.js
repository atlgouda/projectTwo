require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema

const toons = new Team ({
    name: "Toons",
    photourl: "TBD",
    players: [],
    games: []
})

const monstars = new Team ({
    name: "Monstars",
    photoUrl: "TBD",
    players: [],
    games: []
})

Team.deleteMany()
    .then(() => {
        return Team.insertMany([monstars, toons])
    })

    .then(data => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })