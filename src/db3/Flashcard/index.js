const LinvoDB = require('../localdb')
const Flashcard = new LinvoDB("flashcard", {
  expression: String,
  meaning:   String,
  created:   Date,

},{})

module.exports = Flashcard