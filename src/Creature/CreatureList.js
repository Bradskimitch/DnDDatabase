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

    addItem = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/SoloProject/rest/solo/creature/json`, {
            creatureName: this.refs.creatureName.value,
            creatureAC: this.refs.creatureAC.value,
            creatureHP: this.refs.creatureHP.value,
            creatureSpeed: this.refs.creatureSpeed.value
        }).then(response => {
            this.update();
        });
        this.refs.creatureName.value = '';
        this.refs.creatureAC.value = '';
        this.refs.creatureHP.value = '';
        this.refs.creatureSpeed.value = '';
    }

    render() {
        let elements = [];
        let objects = this.state.creatures;
        for (let i = 0; i < this.state.creatures.length; i++) {
            elements.push(
                <CreatureInList
                    action={this.handler}
                    Id={this.state.creatures[i].id}
                    Name={this.state.creatures[i].creatureName}
                    AC={this.state.creatures[i].creatureAC}
                    HP={this.state.creatures[i].creatureHP}
                    Speed={this.state.creatures[i].creatureSpeed}
                />
            );
        }
        return (
            <div className="databaseSection">
                <header>
                    <input ref="userInput" type="text" placeholder="Enter Creature Name" onChange={this.update} />
                </header>
                <form className='itemForm' onSubmit={this.addItem}>
                    <fieldset>
                        <legend>New Creature</legend>
                        <input ref="creatureName" type="text" placeholder="Enter Creature Name" />
                        <input ref="creatureAC" type="text" placeholder="Enter Creature AC" />
                        <input ref="creatureHP" type="text" placeholder="Enter Creature HP" />
                        <input ref="creatureSpeed" type="text" placeholder="Enter Creature Speed" />
                        <button type='submit'>Submit</button>

                    </fieldset>
                </form>
                {elements}
            </div>
        );
    }
}
export default CreatureList;