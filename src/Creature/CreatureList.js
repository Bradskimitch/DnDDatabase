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
            axios.get('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json')
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
        axios.get('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json')
            .then(res => {
                const creatures = res.data;
                this.setState({ creatures });
            })
    }

    addItem = (e) => {
        e.preventDefault();
        axios.post(`http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json`, {
            creatureName: this.refs.creatureName.value,
            creatureAC: 0,
            creatureHP: 0,
            creatureSpeed: 0,
            creatureStr: 0,
            creatureDex: 0,
            creatureCon: 0,
            creatureInt: 0,
            creatureWis: 0,
            creatureCha: 0,
            creatureSavingThrows: 0,
            creatureSkills: 0,
            creatureDamageRes: 0,
            creatureDamageImmune: 0,
            creatureDamageVulnerable: 0,
            creatureConditionImmune: 0,
            creatureSenses: 0,
            creatureLanguage: 0,
            creatureCR: 0,
            creatureAbilities: 0,
            creatureActions: 0,
            creatureReactions: 0,
            creatureLegendary: 0,
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
                    creature={this.state.creatures[i]}
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