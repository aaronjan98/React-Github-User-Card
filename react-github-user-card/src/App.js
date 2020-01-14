import React, { Component } from 'react';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
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

      axios
      .get('https://api.github.com/users/aaronjan98/followers')
      .then(res => {
        console.log('Followers:', res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
      console.log('cDM is running');
  }

  render() {
    return (
      <div className="App">
        <h1>React GitHub Users' Cards</h1>

        <UserCard users={this.state.users}/>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
