import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';

class CreatureInList extends Component {
    deleteEntry = () => {
        axios.delete('http://localhost:8080/SoloProject/rest/solo/creature/json/' + this.props.Id)
            .then(res => {
                this.props.action();
                //console.log(res);
            });

    }

    render() {
        return (
            <fieldset className="dataEntry">
                <legend>
                    {this.props.Name}
                </legend>
                AC = {this.props.AC + '\n'}
                HP = {this.props.HP + '\n'}
                Speed = {this.props.Speed + '\n'}
                <Link to={"/creature" + this.props.Id}>
                    See all
                </Link>
            </fieldset>

        );
    }
}
export default CreatureInList;