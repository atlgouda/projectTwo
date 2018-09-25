require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const Schema = require('./schema')

const { Team, Player, Game } = Schema
//GAMES SEEDED
const unitedGameThree = new Game ({
    date: "October 2nd",
    time: "8 PM",
    opponent: "Gryffindor",
    location: "Boston Garden",
    image: "https://i.imgur.com/zCiONvK.jpg"
})
const gryffindorGameThree= new Game ({
    date: "October 2nd",
    time: "8 PM",
    opponent: "United",
    location: "Boston Garden",
    image: "https://i.imgur.com/zCiONvK.jpg"
})
const shoutOutsGameThree = new Game ({
    date: "October 1st",
    time: "7 PM",
    opponent: "Tune Squad",
    location: "White House",
    image: "https://i.imgur.com/TcQ7uBl.jpg"
})
const tunesGameThree= new Game ({
    date: "October 1st",
    time: "7 PM",
    opponent: "Shout Outs",
    location: "White House",
    image: "https://i.imgur.com/TcQ7uBl.jpg"
})
const shoutOutsGameTwo = new Game ({
    date: "September 29th",
    time: "5 PM",
    opponent: "Gryffindor",
    location: "Hogwarts",
    image: "https://i.imgur.com/cpqQYxA.jpg"
})
const gryffindorGameTwo = new Game ({
    date: "Septmeber 29th",
    time: "5 PM",
    opponent: "Shout Outs",
    location: "Hogwarts",
    image: "https://i.imgur.com/cpqQYxA.jpg",
})
const unitedGameTwo = new Game ({
    date: "September 28th",
    time: "3 PM",
    opponent: "Tune Squad",
    location: "Madison Square Garden",
    image: "https://i.imgur.com/q27xh1T.jpg"
})
const tunesGameTwo = new Game ({
    date: "September 28th",
    time: "3 PM",
    opponent: "United",
    location: "Madison Square Garden",
    image: "https://i.imgur.com/q27xh1T.jpg"
})
const shoutOutsGameOne = new Game ({
    date: "September 25th",
    time: "7 PM",
    opponent: "United",
    location: "Rucker Park",
    image: "https://i.imgur.com/862n6dX.jpg"
})
const unitedGameOne = new Game ({
    date: "September 25th",
    time: "7 PM",
    opponent: "Shout Outs",
    location: "Rucker Park",
    image: "https://i.imgur.com/862n6dX.jpg"
})
const gryffindorGameOne = new Game ({
    date: "September 25th",
    time: "Noon",
    opponent: "Tune Squad",
    location: "Space Jam Arena",
    image: "https://i.imgur.com/M3L2ooJ.jpg"
})
const tunesGameOne = new Game ({
    date: "September 25th",
    time: "Noon",
    opponent: "Gryffindor",
    location: "Space Jam Arena",
    image: "https://i.imgur.com/M3L2ooJ.jpg"
})

//PLAYERS SEEDED
//tunes players
const mj = new Player ({
    name: "Michael Jordan",
    photoUrl: "https://i.imgur.com/AQ9VhCG.jpg?1",
    position: "Shooting Guard",
    age: "33"
})

const bugs = new Player ({
    name: "Bugs Bunny",
    photoUrl: "https://i.imgur.com/ueb7iqw.jpg?1",
    position: "Point Guard",
    age: "10 in rabbit years"
})
const bill = new Player ({
    name: "Bill Murray",
    photoUrl: "https://i.imgur.com/jVE925E.jpg?1",
    position: "Power Forward",
    age: "43"
})

const lola = new Player ({
    name: "Lola Bunny",
    photoUrl: "https://i.imgur.com/6dMqgEq.jpg?1",
    position: "Small Forward",
    age: "9 in rabbit years"
})

const taz = new Player ({
    name: "Tasmanian Devil",
    photoUrl: "https://i.imgur.com/GACDPpL.jpg?1",
    position: "Center",
    age: "14"
})

//shout outs players
const emmy = new Player ({
    name: "Emmy Feinberg",
    photoUrl: "https://i.imgur.com/8cK9vly.png",
    position: "Small Forward",
})
const chrisP = new Player ({
    name: "Chris Pak",
    photoUrl: "https://i.imgur.com/fydfXfX.png",
    position: "Power Forward",
})
const taylor = new Player ({
    name: "Taylor Osbourne",
    photoUrl: "https://i.imgur.com/ul4PNih.png",
    position: "Point Guard",
})
const chrisD = new Player ({
    name: "Chris Ducote",
    photoUrl: "https://i.imgur.com/txljzQN.png",
    position: "Shooting Guard",
})
const andrew = new Player ({
    name: "Andrew Bantug",
    photoUrl: "https://i.imgur.com/g9VLOxl.png",
    position: "Center",
})
//Gryffindor players
const harry = new Player ({
    name: "Harry Potter",
    photoUrl: "https://i.imgur.com/lGQ0kx9.jpg?1",
    position: "Shooting Guard",
    age: 16
})
const ron = new Player ({
    name: "Ron Weasley",
    photoUrl: "https://i.imgur.com/7FWQayY.jpg?1",
    position: "Power Forward",
    age: 16
})
const hermoine = new Player ({
    name: "Hermoine Granger",
    photoUrl: "https://i.imgur.com/GWWXnf2.jpg",
    position: "Point Guard",
    age: "16"
})
const neville = new Player ({
    name: "Neville Longbottom",
    photoUrl: "https://i.imgur.com/CNQuPZW.jpg?1",
    position: 'Center',
    age: "16"
})
const luna = new Player ({
    name: "Luna Lovegood",
    photoUrl: "https://i.imgur.com/6aQmIY1.jpg",
    position: "Small Forward",
    age: "16"
})
//United players
const josef = new Player ({
    name: "Josef Martínez",
    photoUrl: "https://i.imgur.com/iybvDQC.jpg?1",
    position: "Shooting Guard",
    age: '25'
})
const miggy = new Player ({
    name: "Miguel Almirón",
    photoUrl: "https://i.imgur.com/xMDR7fZ.jpg?1",
    position: "Point Guard",
    age: '24'
})
const tito = new Player ({
    name: "Héctor 'Tito' Villalba",
    photoUrl: "https://i.imgur.com/adAw2kN.jpg?1",
    position: "Center",
    age: '24'
})
const parky = new Player ({
    name: 'Michael Parkhurst',
    photoUrl: "https://i.imgur.com/y811Kmk.jpg?1",
    position: 'Small Forward',
    age: '34'
})
const lgp = new Player ({
    name: 'Leandro González Pírez',
    photoUrl: "https://i.imgur.com/6hnXUps.jpg?1",
    position: 'Power Forward',
    age: '26'
})
//TEAMS SEEDED
const shoutouts = new Team ({
    name: "Shout Outs",
    city: "WDI",
    image: "https://i.imgur.com/k0np0YL.png",
    players: [emmy, chrisP, taylor, chrisD, andrew],
    games: [shoutOutsGameOne, shoutOutsGameTwo, shoutOutsGameThree],
    description:  "A lot of help from the back table, but here are the starting 5 for my Team WDI Shout Outs (at the time of seeding this data!)"
})

const united = new Team ({
    name: "United",
    city: "Atlanta",
    image: "https://i.imgur.com/SXNSj29.png",
    players: [josef, miggy, tito, parky, lgp],
    games: [unitedGameOne, unitedGameTwo, unitedGameThree],
    description: "Atlanta United FC joined Major League Soccer in the 2017 season and have surpassed expectaions of a typical expansion team. Currently, in their 2018 season, they are looking to take home both the Supporter's Shield and MLS Cup.  Next up?  Challenging other teams in an offseason basketball league."
})

const gryffindor = new Team ({
    name: "Gryffindor",
    city: "House",
    image: "https://i.imgur.com/0ThJaCB.png",
    players: [harry, ron, hermoine, neville, luna],
    games: [gryffindorGameOne, gryffindorGameTwo, gryffindorGameThree],
    description: "After winnng the House Cup, Dumbledore has convinced the Gryffindor students to participate in a basketball league before O.W.L.s begin"
})

const tunes = new Team ({
    name: "Tune Squad",
    city: "Tune Land",
    image: "https://i.imgur.com/M5LNYFA.png",
    players: [mj, bugs, bill, lola, taz],
    games: [tunesGameOne, tunesGameTwo, tunesGameThree]
})


Team.deleteMany()
    .then(() => {
        return Team.insertMany([tunes, gryffindor, united, shoutouts])
    })

    .then(data => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })