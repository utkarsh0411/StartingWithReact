import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state={
    input:''
  }

  deleteHandler=(index)=>{
      let input=this.state.input;
      input=input.slice(0,index)+input.slice(index+1,input.length)
      this.setState(
        {
          input:input
        }
      )
      console.log("click")
  }

  countLength = (event) => {
    let input=this.state.input;
    if(event.target.value.length>input.length) {
      input=input+(event.target.value.charAt(event.target.value.length-1));
    }
    else{
      input=event.target.value;
    }
    this.setState({
      input:input
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.input} onChange={this.countLength}></input>
        <ValidationComponent cont={this.state.input.length}/>
        {
        this.state.input.split('').map((character,index) => {
              return (<CharComponent click={this.deleteHandler.bind(this,index)} length={character}/>)
         })}
      </div>
    );
  }
}

export default App;
