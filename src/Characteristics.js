import React, { Component } from 'react';
import './App.css';

class Characteristics extends Component {
    modifier = (stat) => {
        if (stat%2!==0){
            stat--;
        }
        if (stat - 10 / 2 > 0) {
            return " (+" + (stat - 10) / 2 + ")";
        } else {
            return " (" + (stat - 10) / 2 + ")";
        }
    }
    render() {


        return (
            <table id='characteristsicsTable'>
            <tbody>
                <tr>
                    <th colSpan="6">Characteristics</th>
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
                    <td>{this.props.str + (this.modifier(this.props.str))}</td>
                    <td>{this.props.dex + (this.modifier(this.props.dex))}</td>
                    <td>{this.props.con + (this.modifier(this.props.con))}</td>
                    <td>{this.props.int + (this.modifier(this.props.int))}</td>
                    <td>{this.props.wis + (this.modifier(this.props.wis))}</td>
                    <td>{this.props.cha + (this.modifier(this.props.cha))}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Characteristics;