import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../List.css';
import CreatureInList from './CreatureInList.js'

let data;
let userInput;

class CreatureList extends Component {

    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = {
            creatures: "Example",
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
        let elements = [];
        let objects = this.state.creatures;
        for (let i = 0; i < this.state.creatures.length; i++) {
            elements.push(
                <CreatureInList
                    action ={this.handler}
                    Id ={this.state.creatures[i].creatureId}
                    Name ={this.state.creatures[i].creatureName}
                    AC ={this.state.creatures[i].creatureAC}
                    HP ={this.state.creatures[i].creatureHP}
                    Speed ={this.state.creatures[i].creatureSpeed}
                    STR = {this.state.creatures[i].creatureSTR}
                />
            );
        }
        return (
            <div className="databaseSection">
                <header>
                    <input ref="userInput" type="text" placeholder="Enter Creature Name" onChange={this.update} />
                </header>
                {elements}
            </div>
        );
    }
}
export default CreatureList;