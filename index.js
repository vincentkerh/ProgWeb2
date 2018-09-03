// index.js

const path = require('path')
const express = require('express')

const app = express()
const bodyParser = require('body-parser')

const port = 8000

var fs = require('fs')


app.use(bodyParser.json())

//routes
app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname + '/views/login.html'));
})

app.get('/views/project_list.html',function(req,res) {
	res.sendFile(path.join(__dirname + '/views/project_list.html'));
})

app.get('/views/newProject.html',function(req,res) {
	res.sendFile(path.join(__dirname + '/views/newProject.html'));
})

app.get('/public/css',function(req,res) {
	res.sendFile(path.join(__dirname + '/public/css/style.css'));
})

app.get('/projects',function(req,res) {
	res.sendFile(path.join(__dirname + '/views/project.json'));
})

app.get('/project/list',function(req,res) {
	res.sendFile(path.join(__dirname + '/views/home.html'));
})

app.get('/styles',function(req,res) {
	res.sendFile(path.join(__dirname + '/style.css'));
})

app.post('/projects', function(req,res) {
	console.log('Request Payload: ' + req.body.id +' '+ req.body.name +' '+ req.body.email);
	fs.readFile('C:/Users/TAGNATI/Desktop/Project list/views/project.json',function (err,data){
		var json = JSON.parse(data);
		json.push({
			"name": req.body.name, 
			"priority": req.body.priority,
			"starting_date": req.body.starting_date,
			"deadline": req.body.deadline,
			"nb_of_part": req.body.nb_of_part,
			"description": req.body.description
		});

		fs.writeFile("C:/Users/TAGNATI/Desktop/Project list/views/project.json", JSON.stringify(json))
	});
});




//listener
app.listen(port, (err) => {
	if(err) {
		return console.log('something bad hapened',err)
	}
	console.log(`server is listening on ${port}`)
})
