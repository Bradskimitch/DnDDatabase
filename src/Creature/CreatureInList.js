import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreatureInList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatures: this.props.creature
        }
        this.update = () => {
        }
    }
    deleteEntry = () => {
        axios.delete('http://dnd.ukwest.cloudapp.azure.com:8080/SoloProject/rest/solo/creature/json/' + this.state.creatures.id)
            .then(res => {
                this.props.action();
                //console.log(res);
            });

    }

    render() {
        return (
            <fieldset className="dataEntry">
                <legend>
                    {this.state.creatures.creatureName}
                </legend>
                AC = {this.state.creatures.creatureAC + '\n'}
                HP = {this.state.creatures.creatureHP + '\n'}
                Speed = {this.state.creatures.creatureSpeed + '\n'}
                <Link to={"/creature" + this.state.creatures.id}>
                    See all
                </Link>
            </fieldset>

        );
    }
}
export default CreatureInList;