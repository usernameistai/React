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


// Making a React App -------------------------------------------------
npm i -g  create-react-app

then
create-react-app client (makes a folder completely separately to back end)

*says* Creating a new React app in C:\Users\David\Desktop\MERN\client.

Need to add property value to package.json in client from React components
"proxy": "http://localhost:5000",

then ...
    cd client

    npm start

going to use "concurrently"

npm i concurrently save (to have multiple things working at once)

in "scripts" in package.json, need ot add
    "client-install": "npm install --prefix client"
means start from the prefixed folder
then add
    "client": "npm start --prefix client"

then the most important script runs both server(node express) and client (react)
    "dev": "concurrently \"npm run server\" \"npm run client\""

then type
    npm run dev
(which starts the nodemon server and the client)


When moving the showcase img to the client/src/img folder, came with thumbs.db (in case something goes wrong later)


INstalled the react and redux development tools for firefox

Install the ES7 React/Redux extension

in Navbar.js type rfc (tab), gives functional component (display dumb components)

import React from 'react'

export default function Navbar() {
  return (
    <div>
      
    </div>
  )
}


rcc (tab) gives class based component

import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

render - is a life cycle method which will render whatever we put in the curly braces,
MUST return (...

in React can't <div class=....> must do <div className=.....>


When you want to install something with ReactJS...

..... You must install it on the client side folder not server side folder

then 
      npm i react-router-dom ( i do --save but don't need to)

See below what Link does---------------------------------------------

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">DevConnector</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="profiles.html"> Developers
                </a>
              </li>
            </ul>
    
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

------------Error handling and display ----------------------------------------

next we need to 
cd client
        and install axios (doing it in separate terminal)

npm i axios

HTP client use to communicate with our back end just to see if we can register a user through just the component for now


Then
      npm i classnames --save
 Allows us to say if a certain something is true, then add this class to it


 <input 
    type="text" 
    className={classnames('form-control form-control-lg', {
      'is-invalid': errors.name // errors.name comes from validation, is-onvalid only happens if errors.name exists
    })}  // was "form-control form-control-lg" 
    placeholder="Name" 
    name="name" 
    value={this.state.name} 
    onChange={this.onChange} />
    { errors.name && (<div className="invalid-feedback">{errors.name}</div>) }
    
    className gets changed
    bit at end gives the red boxes around wrongly filled in form items

  <form noValidate onSubmit={this.onSubmit}> 

  the noValidate stops the HTML5 giving its associated errors



  -------------------- Redux and Authentication ------------------------
  Why we need Redux
  Application level state

  Involved in passing data from forms and between components.

  Next/////......
    Install npm i redux react-redux redux-thunk --save (still unsure about save)

import { Provider } from 'react-redux'; at top of app.js client side

There is a lot on reducers, a lot a lot


Terniary operators
someState ? console.log(err) : res.render
    if (someState) (console.log(err)) else (res.render)
------------Register was hard---

-------Login-(saving stuff in local storage, token generated when logging in)---------
