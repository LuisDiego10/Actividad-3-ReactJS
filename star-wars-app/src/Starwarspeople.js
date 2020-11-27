import './App.css';
import React from 'react'
import Starwarscharacter from './Starwarscharacter'
export default class Starwarspeople extends React.Component {

    characters(props) {
        return([].push(this.props.map((character)=>Starwarscharacter(character.name))))
    }
    
    render(props) {
        
        return (
       <div>
           
        </div>
        );
        }
}