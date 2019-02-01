import React, { Component } from 'react';
import axios from 'axios';
class CreatureListButton extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

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