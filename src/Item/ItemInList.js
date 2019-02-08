import React, { Component } from 'react';
import axios from 'axios';

class ItemInList extends Component {
    deleteEntry = () => {
        axios.delete('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/item/json/' + this.props.Id)
            .then(res => {
                this.props.action();
            });

    }

    updateItem = (e) => {
        e.preventDefault();
        axios.put('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/item/json/' + this.props.Id, {
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
            <fieldset className="dataEntry">
                <legend>
                    {"  " + this.props.Name + "  "}
                </legend>
                {this.props.Type + ', ' + this.props.Rarity + ' (' + this.props.Attunement + ')'}
                <br />
                {this.props.Description}
                <fieldset>
                    <legend>
                        Modify
                    </legend>
                    <div className='column'>
                        <form className='updateForm' onSubmit={this.addItem}>
                            <input ref="itemName" type="text" placeholder="Enter Item Name" />
                            <input ref="itemType" type="text" placeholder="Enter Item Type" />
                            <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                            <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                            <br />
                            <textarea ref="itemDescription" className="massInput" type="text" placeholder="Enter Item Description" />
                        </form>
                    </div>
                    <button className="modifyEntryButton" id='updateButton' onClick={this.updateItem}>Update</button>
                    <button className="modifyEntryButton" id='deleteButton' onClick={this.deleteEntry}>Delete</button>
                </fieldset>
            </fieldset>
        );
    }
}
export default ItemInList;