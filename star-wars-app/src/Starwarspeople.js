import './App.css';
import React from 'react'
import Starwarscharacter from './Starwarscharacter'
export default class Starwarspeople extends React.Component {
    
    render(props) {
        const names=[];
        names:this.props.json.map((character)=>names.push(character.name));

        return (
    <table border="1">
        <thead>
            <tr>
                <th ></th>
                <th colspan="10">Personajes</th>
            </tr>
        </thead>
        <tbody>

        <td>
            Nombre
        </td>
        
            {names.map((name)=>
            <Starwarscharacter name={name}></Starwarscharacter>)
            }
        
        </tbody>
    </table>
            )
        }
    
}