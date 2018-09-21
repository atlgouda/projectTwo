require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema
//GAMES SEEDED
const tunesGameOne = new Game ({
    date: "September 22nd",
    time: "noon",
    opponent: "Monstars",
    location: "Mars"
})

//PLAYERS SEEDED
//tunes
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

//monstars
const pound = new Player ({
    name: "Pound",
    photoUrl: "TBD",
    position: "Small Forward",
    age: "unknown"
})
const bang = new Player ({
    name: "Bang",
    photoUrl: "TBD",
    position: "Power Forward",
    age: "unknown"
})
const bupkus = new Player ({
    name: "Bupkus",
    photoUrl: "TBD",
    position: "Point Guard",
    age: "unknown"
})
const blanko = new Player ({
    name: "Blanko",
    photoUrl: "TBD",
    position: "Shooting Guard",
    age: "unknown"
})
const nawt = new Player ({
    name: "Nawt",
    photoUrl: "TBD",
    position: "Center",
    age: "unknown"
})

//TEAMS SEEDED

const gryffindor = new Team ({
    name: "Lions",
    city: "Gryffindor",
    players: [],
    games: []
})

const tunes = new Team ({
    name: "Tune Squad",
    city: "Looney",
    players: [mj, bugs],
    games: [tunesGameOne]
})

const monstars = new Team ({
    name: "Monstars",
    city: "Nerdluck",
    players: [pound, bang, bupkus, blanko, nawt],
    games: []
})

Team.deleteMany()
    .then(() => {
        return Team.insertMany([monstars, tunes])
    })

    .then(data => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })