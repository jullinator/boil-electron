// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Emitter = require('events')
let event = new Emitter()
event.on('start',(msg)=>console.log(`start msg: ${msg}`))
event.emit('start','test')
function Click (){
	event.emit('start','button-click')
}


var LinvoDB = require("linvodb3");

LinvoDB.defaults.store = { db: require("medeadown") }; // Comment out to use LevelDB instead of Medea
// Set dbPath - this should be done explicitly and will be the dir where each model's store is saved
LinvoDB.dbPath = process.cwd();

var Doc = new LinvoDB("doc", { /* schema, can be empty */ })

function insert(){
	var d = new Doc();
	d.name = "test";
	d.saved = new Date();

	d.save(function() {
		console.log("saved document with _id: " + d._id);
		Doc.count({},function(err, n) {
			console.log("document count "+n)
		});
	});

}
function findAll(callback){
	Doc.find({},function(err,docs){
		callback(docs)
	})
}
function watch (callback){
	var live = Doc.find({}).live(); // don't forget you can still use map, reduce, filter, aggregate

	Doc.on("liveQueryUpdate", function() {
	    // we'll log this twice, once on the initial result and then again once we update document
	    // we won't get this emitted if we modify the dataset with documents that do not fit the query ({ system: solar })
	    callback(live.res);
	});
}

let test = require('./client/test.js')
test.test()
module.exports = {
	Click,
	event,
	db:{
		watch,
		findAll,
		insert
	},
	Doc
}
