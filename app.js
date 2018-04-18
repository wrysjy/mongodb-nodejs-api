var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var port = 3000

// send data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

Genre = require('./models/genre')
Book = require('./models/book')

mongoose.connect('mongodb://localhost/bookstore01')
var db = mongoose.connection

app.get('/',function(req, res){
	res.send('please use /api/books or /api/genres')
});


app.get('/api/genres',function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err
		}
		res.json(genres)
	})
});
app.post('/api/genres',function(req, res){
	var genre = req.body;
	Genre.addGenres(genre,function(err, genre){
		if(err){
			throw err
		}
		res.json(genre)
	})
});

app.get('/api/books',function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err
		}
		res.json(books)
	})
});

app.get('/api/books/:_id',function(req, res){
	Book.getBookById(req.params._id,function(err, book){
		if(err){
			throw err
		}
		res.json(book)
	})
});

app.listen(port)
console.log('running on port ',port)


