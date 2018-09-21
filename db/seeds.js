require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema

const toonsGameOne = new Game ({
    date: "September 22nd",
    time: "noon",
    opponent: "Monstars",
    location: "Mars"
})

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
    city: "Looney",
    players: [mj, bugs],
    games: [toonsGameOne]
})

const monstars = new Team ({
    name: "Monstars",
    city: "Space",
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