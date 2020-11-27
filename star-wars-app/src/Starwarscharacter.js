import './App.css';
export default class starwarcharacter {
    render(props){
        this.state = {
            name: props.name
          }
          console.log(this.state.name);
    }
}