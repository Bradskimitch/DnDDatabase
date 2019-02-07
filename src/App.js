import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './Item/ItemList.js';
import CreatureList from './Creature/CreatureList.js';
import Creature from './Creature/Creature.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.state = {
      items: "Example",
      creatures: "Example"
    }
    this.update = () => {
      axios.get('http://localhost:8080/SoloProject/rest/solo/creature/json')
        .then(res => {
          const creatures = res.data;
          this.setState({ creatures });
        })
    }
  }
  handler() {
    this.update();
  }

  componentDidMount() {
    axios.get('http://localhost:8080/SoloProject/rest/solo/creature/json')
      .then(res => {
        const creatures = res.data;
        this.setState({ creatures });
      })
  }

  render() {
    let creatureElements = [];
    for (let i = 0; i < this.state.creatures.length; i++) {
      creatureElements.push(
        <Route exact={true} path={'/creature' + this.state.creatures[i].id} render={() => (
          <Creature
            action={this.handler}
            creature={this.state.creatures[i]}
          />
        )} />
      );
    }
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sideBar">
            <Link to="/">
              <button className="menuButton" type="button">Home</button>
            </Link>
            <Link to="/itemslist">
              <button className="menuButton" type="button">Magic Items</button>
            </Link>
            <Link to="/creaturelist">
              <button className="menuButton" type="button">Creatures</button>
            </Link>
          </div>

          <div className="App-body">
          <header>The D&D Database</header>
            <Route exact={true} path='/' render={() => (
              <div className="">
              </div>
            )} />
            <Route exact={true} path='/itemslist' render={() => (
              <ItemList
                action={this.handler}
                items={this.state.items}
              />
            )} />
            <Route exact={true} path='/creaturelist' render={() => (
              <CreatureList
                action={this.handler}
                creatures={this.state.creatures}
              />
            )} />
            {creatureElements}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
