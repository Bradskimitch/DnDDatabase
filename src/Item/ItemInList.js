import React, { Component } from 'react';
import axios from 'axios';

class ItemInList extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

    }

    updateItem = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/SoloProject/rest/solo/item/json/' + this.props.Id, {
            equipmentName: this.refs.itemName.value,
            equipmentType: this.refs.itemType.value,
            equipmentRarity: this.refs.itemRarity.value,
            equipmentAttunement: this.refs.itemAttunement.value,
            equipmentDescription: this.refs.itemDescription.value
        }).then(response => {
            this.props.action();
        });
        this.refs.itemName.value = '';
        this.refs.itemType.value = '';
        this.refs.itemRarity.value = '';
        this.refs.itemAttunement.value = '';
        this.refs.itemDescription.value = '';
    }

    render() {
        return (
            <div className='listButton'>
                <fieldset>
                    <legend>{this.props.Name}</legend>
                    <div>{this.props.Type + ', ' + this.props.Rarity + '(' + this.props.Attunement + ')'}</div>
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
                        <button id='updateButton' onClick={this.updateItem}>Update</button>
                        <button id='deleteButton' onClick={this.deleteEntry}>Delete</button>
                    </fieldset>
                </fieldset>
            </div>
        );
    }
}
export default ItemInList;