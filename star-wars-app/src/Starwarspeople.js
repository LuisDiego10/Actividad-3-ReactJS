import './App.css';
import React from 'react'
import Table from './Table'
export default class Starwarspeople extends React.Component {
    render() {

        return (
       <div>
           <Table data={this.props.json}/>
        </div>
        );
        }
}