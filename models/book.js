var mongoose = require('mongoose')

var bookSchema =  mongoose.Schema({
	title:{
		type: String,
		require: true
	},
	genre:{
		type: String,
		require: true
	},
	author:{
		type: String
	},
	publisher:{
		type: String
	},
	pages:{
		type: Number
	},
	buy_url:{
		type: String
	},
	create_data:{
		type: Date,
		default: Date.now
	}
})

var Book = module.export = mongoose.model('Book',bookSchema)

module.exports.getBooks = function(callback , limit){
	Book.find(callback).limit(limit)
}

module.exports.getBookById = function(id , callback){
	Book.findById(id,callback)
}