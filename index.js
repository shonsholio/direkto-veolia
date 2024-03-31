const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const exp = require('constants');

const app = express();

//IMPORTING ROUTES
const mainRoutes = require('./routes/main');
const { prototype } = require('stream');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));

//ROUTES
app.use('/', mainRoutes)

app.listen(app.get('port'), () => {
  console.log('CONECTADOS AL PUERTO ' + (app.get('port')))
})