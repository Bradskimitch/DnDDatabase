import React, { Component } from 'react';
import axios from 'axios';
class CreatureInList extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/creature/json/' + this.props.Id)
            .then(res => {
                this.props.action();
                //console.log(res);
            });

    }

    updateCreature = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/SoloProject/rest/solo/creature/json/' + this.props.Id, {
            creatureName: this.refs.creatureName.value,
            creatureAC: this.refs.creatureAC.value,
            creatureHP: this.refs.creatureHP.value,
            creatureSpeed: this.refs.creatureSpeed.value
        }).then(response => {
            this.props.action();
            //console.log(response);
        });
        this.refs.creatureName.value = '';
        this.refs.creatureAC.value = '';
        this.refs.creatureHP.value = '';
        this.refs.creatureSpeed.value = '';

    }

    render() {
        return (
            <div className='listButton'>
                <fieldset>
                    <legend>{this.props.Name}</legend>
                    <div id='dataEntry'>AC = {this.props.AC}<br /></div>
                    <div id='dataEntry'>HP = {this.props.HP}<br /></div>
                    <div id='dataEntry'>Speed = {this.props.Speed}<br /></div>
                    <br />
                    <fieldset>
                        <legend>Modify</legend>
                        <div className='column'>
                            <form className='updateForm' onSubmit={this.addItem}>
                                <input ref="creatureName" type="text" placeholder="Enter Creature Name" />
                                <input ref="creatureAC" type="text" placeholder="Enter Creature AC" />
                                <input ref="creatureHP" type="text" placeholder="Enter Creature HP" />
                                <input ref="creatureSpeed" type="text" placeholder="Enter Creature Speed" />
                            </form>
                        </div>
                        <button id='updateButton' onClick={this.updateCreature}>Update</button>
                        <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>
                    </fieldset>
                </fieldset>
            </div>
        );
    }
}
export default CreatureInList;