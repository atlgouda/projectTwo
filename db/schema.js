const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlayerSchema = new Schema ({
    name: String,
    photoUrl: String,
    position: String,
    age: String
})

const GameSchema = new Schema ({
    date: String,
    time: String,
    opponent: String,
    location: String
})

const TeamSchema = new Schema ({
    name: String,
    photoUrl: String,
    players: [PlayerSchema],
    games: [GameSchema]
})

const PlayerModel = mongoose.model('Player', PlayerSchema)
const GameModel = mongoose.model('Game', GameSchema)
const TeamModel = mongoose.model('Team', TeamSchema)

module.exports = {
    Player: PlayerModel,
    Game: GameModel,
    Team: TeamModel
}