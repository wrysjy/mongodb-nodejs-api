var mongoose = require('mongoose')
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
},{
    versionKey: false // You should be aware of the outcome after set to false
})


var Genre = module.export = mongoose.model('Genre',genreSchema)

module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit)
}

module.exports.addGenres = function(genres,callback){
	Genre.create(genres,callback)
}