import './App.css';
import React from 'react'
import Starwarscharacter from './Starwarscharacter'
export default class Starwarspeople extends React.Component {
    
    render(props) {
        const names=[];
        names:this.props.json.map((character)=>names.push(character.name));

        return (
    <table border="1">
        <tbody>
        <tr>
            <td>Personajes</td>
        </tr>

        <td>{
            names.map((name)=>
            <Starwarscharacter name={name}></Starwarscharacter>)
            }
        </td>
        </tbody>
    </table>
            )
        }
    
}