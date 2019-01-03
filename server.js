const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

const users      = require('./routes/api/users');
const profile    = require('./routes/api/profile');
const posts      = require('./routes/api/posts');

const app        = express();

// Body parser middlewae
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("MongoDB Connected"))
  // then is a promise returning something, if connect to db successfully
  .catch(err => console.log(err));
// needs a catch to go with it, called chaining?

app.get("/", (req, res) => res.send("Hello"));

// User Routes - saves writing full routes all the time
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
// back apostrophes ES2015 template literal so can put variable inside with a string
