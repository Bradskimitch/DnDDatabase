import React, { Component } from 'react';
import './App.css';

class Characteristics extends Component {
    render() {
        return (
            <table id='characteristsicsTable'>
                <tr>
                    <th colSpan="6">Charicteristics</th>
                </tr>
                <tr>

                    <td id="characteristic">Strength</td>
                    <td id="characteristic">Dexterity</td>
                    <td id="characteristic">Constitution</td>
                    <td id="characteristic">Intelligence</td>
                    <td id="characteristic">Wisdom</td>
                    <td id="characteristic">Charisma</td>
                </tr>
                <tr>
                    <td>{this.props.str + " (+" + (this.props.str-10)/2 + ")"}</td>
                    <td>{this.props.dex + " (+" + (this.props.dex-10)/2 + ")"}</td>
                    <td>{this.props.con + " (+" + (this.props.con-10)/2 + ")"}</td>
                    <td>{this.props.int + " (+" + (this.props.int-10)/2 + ")"}</td>
                    <td>{this.props.wis + " (+" + (this.props.wis-10)/2 + ")"}</td>
                    <td>{this.props.cha + " (+" + (this.props.cha-10)/2 + ")"}</td>
                </tr>
            </table>
        );
    }
}

export default Characteristics;