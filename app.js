// Dependencies
const path         = require('path');
const logger       = require('morgan');
const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

// Routes
const index = require('./routes/index');
const todos = require('./routes/todos');

// Express App
const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Other middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Route middleware
app.use('/', index);
app.use('/api/v1/', todos);

// Error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Create server
var server = app.listen(3000, () => {
  const host = 'localhost';
  const port = server.address().port;
  console.log(`Server listening on ${host}:${port}`);
});

// Export
module.exports = app;
