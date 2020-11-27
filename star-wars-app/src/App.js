import './App.css';
import Alert from './Alert';
import React from 'react'
import logo from './logo.svg';
import Starwarspeople from './Starwarspeople';
// import axios from 'axios'
export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    counter: 0,
    json:""
  }
}
componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000)
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => console.error(data));

    // .then(res=>res.json())
    // .then((res)=>{
    //     this.setState({json:res})
    
  
};
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      <div>{this.state.counter}</div>
      <Alert count={this.state.counter}></Alert>
      <div>{JSON.stringify(this.state.json)}</div>
      {/* <Starwarspeople json={this.state.json} ></Starwarspeople> */}
      </header>
      </div>

    );
  }
}