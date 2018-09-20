require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema

const mj = new Player ({
    name: "Michael Jordan",
    photoUrl: "TBD",
    position: "SG",
    age: "33"
})

const bugs = new Player ({
    name: "Bugs Bunny",
    photoUrl: "TBD",
    position: "PG",
    age: "10 in rabbit years"
})

const toons = new Team ({
    name: "Toons",
    photoUrl: "TBD",
    players: [mj, bugs],
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