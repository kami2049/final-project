const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const app = express();

app.set('view engine', 'ejs');

const resourceController = require('./controller/resource');

app.get('/', resourceController.get);
app.get('/home', resourceController.get);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});