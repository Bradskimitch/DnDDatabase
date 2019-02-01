import React, { Component } from 'react';
import axios from 'axios';
class CreatureInList extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

    }

    render() {
        return (
            <div className='listButton'>
                <fieldset>
                    <legend>{this.props.Name}</legend>
                    <div>{this.props.AC + ', ' + this.props.HP + ', ' + this.props.Speed}</div>
                    <br />
                    <div>{this.props.Description}</div>
                    <br />
                    <fieldset>
                        <legend>Modify</legend>
                        <div className='column'>
                            <form className='updateForm' onSubmit={this.addItem}>
                                <input ref="itemName" type="text" placeholder="Enter Item Name" />
                                <input ref="itemType" type="text" placeholder="Enter Item Type" />
                                <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                                <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                                <br />
                                <input ref="itemDescription" type="text" placeholder="Enter Item Description" />
                            </form>
                        </div>
                        <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>
                    </fieldset>
                </fieldset>
            </div>
        );
    }
}
export default CreatureInList;