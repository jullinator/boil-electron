const LinvoDB = require('./localdb')
const Book = new LinvoDB("book", {
  name:String,
  pageCount:Number,
  pageIndex:Number,

},{})
const Page= new LinvoDB("page",{
	 bookRef: ID,
	pageIndex: Number,
	Sentences: [ID] || Sentences: [String]
},{})
const Sentence= new LinvoDB("sentence",{
	pageRef: ID,
	text: String,
	sentenceIndex: Number
},{})


module.exports = {
  Book, Page, Sentence
}
