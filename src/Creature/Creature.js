import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Characteristics from '../Characteristics.js'
import { BrowserRouter, Route, Link } from 'react-router-dom';


class Creature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatures: this.props.creature
        }
    }
    deleteEntry = () => {
        axios.delete('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json/' + this.state.creatures.id)
            .then(res => {
                this.props.action();
                console.log(this.state.creatures.id);
                console.log(res);
            });
    }
    updateCreature = (e) => {
        e.preventDefault();
        axios.put('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json/' + this.state.creatures.id, {
            creatureName: this.refs.creatureName.value,
            creatureRace: this.refs.creatureRace.value,
            creatureSubRace: this.refs.creatureSubRace.value,
            creatureAllignment: this.refs.creatureAllignment.value,
            creatureHP: this.refs.creatureHP.value,
            creatureAC: this.refs.creatureAC.value,
            creatureSpeed: this.refs.creatureSpeed.value,
            creatureStr: this.refs.creatureSTR.value,
            creatureDex: this.refs.creatureDEX.value,
            creatureCon: this.refs.creatureCON.value,
            creatureInt: this.refs.creatureINT.value,
            creatureWis: this.refs.creatureWIS.value,
            creatureCha: this.refs.creatureCHA.value,
            creatureSavingThrows: this.refs.creatureSavingThrows.value,
            creatureSkills: this.refs.creatureSkills.value,
            creatureDamageRes: this.refs.creatureDamageRes.value,
            creatureDamageImmune: this.refs.creatureDamageImmune.value,
            creatureDamageVulnerable: this.refs.creatureDamageVulnerable.value,
            creatureConditionImmune: this.refs.creatureConditionImmune.value,
            creatureSenses: this.refs.creatureSenses.value,
            creatureLanguage: this.refs.creatureLanguage.value,
            creatureCR: this.refs.creatureCR.value,
            creatureAbilities: this.refs.creatureAbilities.value,
            creatureActions: this.refs.creatureActions.value,
            creatureReactions: this.refs.creatureReactions.value,
            creatureLegendary: this.refs.creatureLegendary.value,
            //creatureEquipment: this.refs.creatureEquipment.value
        }).then(response => {
            this.props.action();
            console.log(response);
        }).catch(error => {
            console.log(error.response)
        });

    }

    render() {
        return (
            <div className="databaseSection">
                <fieldset className="dataEntry">
                    <legend>
                        {"  " + this.state.creatures.creatureName + "  "}
                    </legend>
                    AC = {this.state.creatures.creatureAC + '\n'}
                    HP = {this.state.creatures.creatureHP + '\n'}
                    Speed = {this.state.creatures.creatureSpeed + '\n'}
                    <Characteristics
                        str={this.state.creatures.creatureStr}
                        dex={this.state.creatures.creatureDex}
                        con={this.state.creatures.creatureCon}
                        int={this.state.creatures.creatureInt}
                        wis={this.state.creatures.creatureWis}
                        cha={this.state.creatures.creatureCha}
                    />
                    Saving Throws: {this.state.creatures.creatureSavingThrows + '\n'}
                    Skills: {this.state.creatures.creatureSkills + '\n'}
                    Damage Resistances: {this.state.creatures.creatureDamageRes + '\n'}
                    Damage Immunities: {this.state.creatures.creatureDamageImmune + '\n'}
                    Damage Vulnerabilities: {this.state.creatures.creatureDamageVulnerable + '\n'}
                    Condition Immunities: {this.state.creatures.creatureConditionImmune + '\n'}
                    Senses: {this.state.creatures.creatureSenses + '\n'}
                    Languages: {this.state.creatures.creatureLanguage + '\n'}
                    CR: {this.state.creatures.creatureCR + '\n'}
                    - Abilities -<br />
                    {this.state.creatures.creatureAbilities + '\n'}
                    - Actions -<br />
                    {this.state.creatures.creatureActions + '\n'}
                    - Reactions -<br />
                    {this.state.creatures.creatureReactions + '\n'}
                    - Legendary Actions -<br />
                    {this.state.creatures.creatureLegendary + '\n'}
                    - Equipment -<br />
                    {this.state.creatures.creatureEquipment + '\n'}


                    <fieldset>
                        <legend>
                            Modify
                        </legend>
                        <div className='column'>
                            <form className='updateForm' onSubmit={this.addItem}>
                                <li><input ref="creatureName" type="text" placeholder="Enter Creature Name" /></li>
                                <li><input ref="creatureRace" type="text" placeholder="Enter Creature Race" /> <input ref="creatureSubRace" type="text" placeholder="Enter Creature Subrace" /></li>
                                <li><input ref="creatureAllignment" type="text" placeholder="Enter Creature Allignment" /></li>
                                <li><input ref="creatureAC" type="text" placeholder="Enter Creature AC" /></li>
                                <li><input ref="creatureHP" type="text" placeholder="Enter Creature HP" /></li>
                                <li><input ref="creatureSpeed" type="text" placeholder="Enter Creature Speed" /></li>
                                <li>
                                    <input ref="creatureSTR" type="number" placeholder="Enter Strength" />
                                    <input ref="creatureDEX" type="number" placeholder="Enter Dexterity" />
                                    <input ref="creatureCON" type="number" placeholder="Enter Constitution" />
                                    <input ref="creatureINT" type="number" placeholder="Enter Intelligence" />
                                    <input ref="creatureWIS" type="number" placeholder="Enter Wisdom" />
                                    <input ref="creatureCHA" type="number" placeholder="Enter Charisma" />
                                </li>
                                <li><input ref="creatureSavingThrows" type="text" placeholder="Enter Saving Throws" /></li>
                                <li><input ref="creatureSkills" type="text" placeholder="Enter Creature Skills" /></li>
                                <li><input ref="creatureDamageRes" type="text" placeholder="Enter Resisted Damage Types" /></li>
                                <li><input ref="creatureDamageImmune" type="text" placeholder="Enter Immunity Damage Types" /></li>
                                <li><input ref="creatureDamageVulnerable" type="text" placeholder="Enter Vulnerable Damage Types" /></li>
                                <li><input ref="creatureConditionImmune" type="text" placeholder="Enter Immune Condition Types" /></li>
                                <li><input ref="creatureSenses" type="text" placeholder="Enter Creature Senses" /></li>
                                <li><input ref="creatureLanguage" type="text" placeholder="Enter Creature Languages" /></li>
                                <li><input ref="creatureCR" type="text" placeholder="Enter Creature Challenge Rating" /></li>
                                <li><input ref="creatureAbilities" type="text" placeholder="Enter Creature Abilities" /></li>
                                <li><input ref="creatureActions" type="text" placeholder="Enter Creature Actions" /></li>
                                <li><input ref="creatureReactions" type="text" placeholder="Enter Creature Reactions" /></li>
                                <li><input ref="creatureLegendary" type="text" placeholder="Enter Creature Legendary Actions" /></li>
                            </form>
                        </div>
                        <button className="modifyEntryButton" id='updateButton' onClick={this.updateCreature}>Update</button>
                        <Link to="/deleteMessage">
                            <button className="modifyEntryButton" id='deleteButton' onClick={this.deleteEntry}>Delete</button>
                        </Link>

                    </fieldset>
                </fieldset>
            </div>
        );
    }
}

export default Creature;