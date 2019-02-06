import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../List.css';
import ItemInList from './ItemInList.js'


let data;
var userInput;

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
                    let items = res.data.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(this.refs.userInput.value.toLowerCase())));
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
        let objects = this.state.items;
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
                    <input ref="userInput" type="text" placeholder="Enter Item Name" onChange={this.update} />
                </header>
                    <form className='itemForm' onSubmit={this.addItem}>
                        <fieldset>
                            <legend>New Item</legend>
                            <input ref="itemName" type="text" placeholder="Enter Item Name" />
                            <input ref="itemType" type="text" placeholder="Enter Item Type" />
                            <input ref="itemRarity" type="text" placeholder="Enter Item Rarity" />
                            <input ref="itemAttunement" type="text" placeholder="Enter Item Attunement Needs" />
                            <button type='submit'>Submit</button>
                            <br />
                            <input ref="itemDescription" type="text" placeholder="Enter Item Description" />

                        </fieldset>
                    </form>
                    {elements}
            </div>
        );
    }
}

export default ItemList;