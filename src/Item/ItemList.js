import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../List.css';
import ItemInList from './ItemInList.js'

class ItemList extends Component {

    constructor() {
        super();
        this.handler = this.handler.bind(this);
        this.state = {
            items: "Example",
        }

        this.update = () => {
            axios.get('http://localhost:8080/SoloProject/rest/solo/item/json')
                .then(res => {
                    //const items = res.data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(this.refs.userInput.value.toLowerCase())));
                    let items = res.data.filter(o => o.equipmentName.toLowerCase().includes(this.refs.userNameInput.value.toLowerCase()));
                    items = items.filter(o => o.equipmentType.toLowerCase().includes(this.refs.userTypeInput.value.toLowerCase()));
                    items = items.filter(o => o.equipmentRarity.toLowerCase().includes(this.refs.userRarityInput.value.toLowerCase()));
                    this.setState({ items });
                })
        }
    }

    handler() {
        this.update();
    }

    componentDidMount() {
        axios.get('http://localhost:8080/SoloProject/rest/solo/item/json')
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    addItem = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/SoloProject/rest/solo/item/json`, {
            equipmentName: this.refs.itemName.value,
            equipmentType: this.refs.itemType.value,
            equipmentRarity: this.refs.itemRarity.value,
            equipmentAttunement: this.refs.itemAttunement.value,
            equipmentDescription: this.refs.itemDescription.value
        }).then(response => {
            this.update();
        });
        this.refs.itemName.value = null;
        this.refs.itemType.value = null;
        this.refs.itemRarity.value = null;
        this.refs.itemAttunement.value = null;
        this.refs.itemDescription.value = null;
    }

    render() {
        let elements = [];
        for (let i = 0; i < this.state.items.length; i++) {
            elements.push(
                <ItemInList
                    action={this.handler}
                    Id={this.state.items[i].equipmentId}
                    Name={this.state.items[i].equipmentName}
                    Type={this.state.items[i].equipmentType}
                    Rarity={this.state.items[i].equipmentRarity}
                    Attunement={this.state.items[i].equipmentAttunement}
                    Description={this.state.items[i].equipmentDescription}
                />
            );
        }
        return (
            <div className="databaseSection">
                <header>
                    Search: <input ref="userNameInput" type="text" placeholder="Search By Item name" onChange={this.update} />
                    <input ref="userTypeInput" type="text" placeholder="Search By Item Type" onChange={this.update} />
                    <input ref="userRarityInput" type="text" placeholder="Search By Item Rarity" onChange={this.update} />
                </header>
                <form className='itemForm' onSubmit={this.addItem}>
                    <fieldset>
                        <legend>New Item</legend>
                        <input ref="itemName" type="text" placeholder="Enter Item Name" />
                        <input ref="itemType" type="text" placeholder="Enter Item Type" />
                        <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                        <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                        <button className="modifyEntryButton" id='updateButton' type='submit'>Submit</button>
                        <br />
                        <textarea ref="itemDescription" className="massInput" type="text" placeholder="Enter Item Description"/>
                    </fieldset>
                </form>
                {elements}
            </div>
        );
    }
}

export default ItemList;