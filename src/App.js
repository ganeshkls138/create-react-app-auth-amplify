import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><b>welcome to logiq</b></h1>
      <form>
      <fieldset>
         <label>
      <p>Company_name</p>
           <input name=" Company_name" />
           <p>Company_address</p>
           <input name=" Company_address" />
           <p>Country</p>
           <input name=" Country" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
     </form>
      <h2></h2>
           <a
            className="App-link"
            href="https://master.d1ayjwilzbfiqz.amplifyapp.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
      <b>
             click here for  registering device
      </b>
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
