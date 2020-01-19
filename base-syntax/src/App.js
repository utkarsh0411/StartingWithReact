import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: "ABC"
  }
  render() {
    return (
      <div className="App">
        <button>Ok</button>
        <UserInput name={this.getName()} userChanged={this.inputHandler}/>
        <UserOutput name={this.state.usernames}/>
        <UserOutput name="Bye"/>
      </div>
    );
  }
  getName=()=>{
    return this.state.usernames
  }
  inputHandler=(event)=>{
    this.setState({
      usernames:event.target.value
    })
    console.log(this.state.usernames);
  }
}

export default App;
