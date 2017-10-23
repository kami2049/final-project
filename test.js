const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const app = express();

app.set('view engine', 'ejs');

const resourceController = require('./controller/resource');

app.get('/', resourceController.get);
app.get('/home', resourceController.get);

// app.get('/home', function(req,res) {
// 	jsonfile.readFile('./models/resource.json', 'utf8', function(err, data) 
// {
// 	if (err) throw err;
// 	console.log(data[0].name);
// 	res.render('home', {resource: data});	
// });
	
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});