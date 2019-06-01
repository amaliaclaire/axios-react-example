import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


// https://api.github.com/users/john
import UserForm from "./components/UserForm"


class App extends Component {

  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const repos = res.data.public_repos;
      this.setState({repos});
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-Title">HTTP calls in React</h1>

        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>Number of repos: {this.state.repos}</p> : <p>please enter repo</p>}

      </div>
    );
  }
}

export default App;
