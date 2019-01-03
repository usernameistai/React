Setting up mlab like with the previous course, have a user dave password dave314

set up environment
npm init

body-parser enables us to take in data through our requests and do what we want with it

npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator --save

const express = require("express"),
app = express();

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
// back ticks is ES2015 template literal so can put variable inside with a string
