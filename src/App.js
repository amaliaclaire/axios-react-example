import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


// https://api.github.com/users/john
import UserForm from "./components/UserForm"


class App extends Component {
  getUser = (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      console.log('res', res);
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-Title">HTTP calls in React</h1>

        </header>
        <UserForm getUser={this.getUser} />

      </div>
    );
  }
}

export default App;
