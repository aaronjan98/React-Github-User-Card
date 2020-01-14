import React, { Component } from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/aaronjan98')
      .then(res => {
        console.log('User Info:', res.data);
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
      console.log('cDM is running');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>

        <UserCard users={this.state.users}/>
      </div>
    );
  }
}

export default App;
