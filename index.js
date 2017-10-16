const express = require('express');
const bodyParser = require('body-parser');
// const jsonfile = require('jsonfile');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');

// jsonfile.readFile('/models/resource.json',  function(err, data) {
//   console.log(data)
// });

fs.readFile('./models/resource.json', 'utf8', function(err, data) {
	if (err) throw err;
	console.log(data);
});

app.get('/', function (req, res) {
  res.render('home')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});