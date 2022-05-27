const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Usuario = require('./routes/usuario')
var cookieSession = require('cookie-parser');
var session = require('express-session');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname), 'views');
app.set('views engine', 'ejs');
app.use('/', Usuario);

app.listen(app.get('port'), () =>{
    console.log(`Aplicacion Iniciada ${app.get('port')}`)
});