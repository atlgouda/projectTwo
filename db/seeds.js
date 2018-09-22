require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema
//GAMES SEEDED
const tunesGameOne = new Game ({
    date: "September 22nd",
    time: "noon",
    opponent: "Lions",
    location: "Mars"
})

//PLAYERS SEEDED
//tunes players
const mj = new Player ({
    name: "Michael Jordan",
    photoUrl: "TBD",
    position: "Shooting Guard",
    age: "33"
})

const bugs = new Player ({
    name: "Bugs Bunny",
    photoUrl: "TBD",
    position: "Point Guard",
    age: "10 in rabbit years"
})
const bill = new Player ({
    name: "Bill Murray",
    photoUrl: "TBD",
    position: "Power Forward",
    age: "43"
})

const lola = new Player ({
    name: "Lola Bunny",
    photoUrl: "TBD",
    position: "Small Forward",
    age: "9 in rabbit years"
})

const taz = new Player ({
    name: "Tasmanian Devil",
    photoUrl: "TBD",
    position: "Center",
    age: "14"
})

//shout ots players
const emmy = new Player ({
    name: "Emmy Feinberg",
    photoUrl: "TBD",
    position: "Small Forward",
    age: "unknown"
})
const chrisP = new Player ({
    name: "Chris Pak",
    photoUrl: "TBD",
    position: "Power Forward",
    age: "unknown"
})
const taylor = new Player ({
    name: "Taylor Osbourne",
    photoUrl: "TBD",
    position: "Point Guard",
    age: "unknown"
})
const chrisD = new Player ({
    name: "Chris Ducote",
    photoUrl: "TBD",
    position: "Shooting Guard",
    age: "unknown"
})
const andrew = new Player ({
    name: "Andrew Bantug",
    photoUrl: "TBD",
    position: "Center",
    age: "unknown"
})
//Gryffindor players
const harry = new Player ({
    name: "Harry Potter",
    photoUrl: "TBD",
    position: "Shooting Guard",
    age: 16
})
const ron = new Player ({
    name: "Ron Weasley",
    photoUrl: "TBD",
    position: "Power Forward",
    age: 16
})
const hermoine = new Player ({
    name: "Hermoine Granger",
    photoUrl: "TBD",
    position: "Point Guard",
    age: "16"
})
const neville = new Player ({
    name: "Neville Longbottom",
    photoUrl: "TBD",
    position: 'Center',
    age: "16"
})
const luna = new Player ({
    name: "Luna Lovegood",
    photoUrl: "TBD",
    position: "Small Forward",
    age: "16"
})
//United players
const josef = new Player ({
    name: "Josef Martínez",
    photoUrl: "TBD",
    position: "Shooting Guard",
    age: '25'
})
const miggy = new Player ({
    name: "Miguel Almirón",
    photoUrl: "TBD",
    position: "Point Guard",
    age: '24'
})
const tito = new Player ({
    name: "Héctor 'Tito' Villalba",
    photoUrl: "TBD",
    position: "Center",
    age: '24'
})
const parky = new Player ({
    name: 'Michael Parkhurst',
    photoUrl: "TBD",
    position: 'Small Forward',
    age: '34'
})
const lgp = new Player ({
    name: 'Leandro González Pírez',
    photoUrl: "TBD",
    position: 'Power Forward',
    age: '26'
})
//TEAMS SEEDED
const united = new Team ({
    name: "United",
    city: "Atlanta",
    players: [josef, miggy, tito, parky, lgp],
    games: []
})

const gryffindor = new Team ({
    name: "Lions",
    city: "Gryffindor",
    players: [harry, ron, hermoine, neville, luna],
    games: []
})

const tunes = new Team ({
    name: "Tune Squad",
    city: "Tune Land",
    players: [mj, bugs, bill, lola, taz],
    games: [tunesGameOne]
})

const shoutouts = new Team ({
    name: "Shout Outs",
    city: "WDI",
    players: [emmy, chrisP, taylor, chrisD, andrew],
    games: []
})

Team.deleteMany()
    .then(() => {
        return Team.insertMany([shoutouts, tunes, gryffindor, united])
    })

    .then(data => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })