import React, { Component } from 'react';
import axios from 'axios';
class CreatureListButton extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/creature/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

    }

    updateItem = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/SoloProject/rest/solo/creature/json/' + this.props.Id, {
            creatureName: this.refs.creatureName.value,
            creatureAC: this.refs.creatureAC.value,
            creatureHP: this.refs.creatureHP.value,
            creatureSpeed: this.refs.creatureSpeed.value
        }).then(response => {
            this.props.action();
        });
        this.refs.creatureName.value = '';
        this.refs.creatureAC.value = '';
        this.refs.creatureHP.value = '';
        this.refs.creatureSpeed.value = '';

    }

    render() {
        return (
            <div className='listButton'>
                <button id='tableButton'>
                    <div id='dataEntry'>{this.props.Name}<br/></div>
                    <div id='dataEntry'>{this.props.AC}<br/></div>
                    <div id='dataEntry'>{this.props.HP}<br/></div>
                    <div id='dataEntry'>{this.props.Speed}<br/></div>
                    <br />
                </button>
                <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>
            </div>
        );
    }
}
export default CreatureListButton;