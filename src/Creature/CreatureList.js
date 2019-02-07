import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../List.css';
import CreatureInList from './CreatureInList.js'

class CreatureList extends Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            creatures: this.props.creatures
        }
        this.update = () => {
            axios.get('http://localhost:8080/SoloProject/rest/solo/creature/json')
                .then(res => {
                    const creatures = res.data;
                    this.setState({ creatures });
                    this.props.action();
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
                    Search: <input ref="userInput" type="text" placeholder="Search Items" onChange={this.update} />
                </header>
                <form className='itemForm' onSubmit={this.addItem}>
                    <fieldset>
                        <legend>New Creature</legend>
                        <input ref="creatureName" type="text" placeholder="Enter Creature Name" />
                        <input ref="creatureAC" type="text" placeholder="Enter Creature AC" />
                        <input ref="creatureHP" type="text" placeholder="Enter Creature HP" />
                        <input ref="creatureSpeed" type="text" placeholder="Enter Creature Speed" />
                        <button className="modifyEntryButton" id='updateButton' type='submit'>Submit</button>
                    </fieldset>
                </form>
                {elements}
            </div>
        );
    }
}
export default CreatureList;