import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './Item/ItemList.js';
import CreatureList from './Creature/CreatureList.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sideBar">
            <li>
              <Link to="/">
                <button id="menuButton" type="button">
                  Home
                  </button>
              </Link>
            </li>
            <li>
              <Link to="/itemslist">
                <button id="menuButton" type="button">
                  Magic Items
                  </button>
              </Link>
            </li>
            <li>
              <Link to="/creaturelist">
                <button id="menuButton" type="button">
                  Creatures
                  </button>
              </Link>
            </li>

          </div>


          <div className="App-body">
            <Route exact={true} path='/' render={() => (
              <div className="">
              </div>
            )} />
            <Route exact={true} path='/itemslist' render={() => (
              <div className="">
                <ItemList />
              </div>
            )} />
            <Route exact={true} path='/creaturelist' render={() => (
              <div className="">
                <CreatureList />
              </div>
            )} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
