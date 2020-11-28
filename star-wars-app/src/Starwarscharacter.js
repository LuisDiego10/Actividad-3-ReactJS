import './App.css';
import React from 'react'
export default class Starwarcharacter extends React.Component{
    render(props){
        return (
        <td>
            {this.props.name}
        </td>
             );
    }
}