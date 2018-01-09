const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.set('layout', 'layouts/layout');

app.use(expressLayout);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public'));
app.use(require('./config/routes/route.js'));

app.listen(process.env.PORTAPPLI, () => {
  console.log('vous être connectez port ' + process.env.PORT)
});