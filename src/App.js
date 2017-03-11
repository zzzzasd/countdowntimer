import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBar from './components/InputBar'
import ClockTimer from './components/ClockTimer'

class App extends Component {

  constructor(props) {
    super(props);

    this.parentHandleChange = this.parentHandleChange.bind(this);
  }

  parentHandleChange(value) {
   console.log(value)
   this.setState({output: value})
 }

  render() {
    return (
      <div>
        <InputBar onValueChange={this.parentHandleChange} />
        //<ClockTimer start={Date.now()} />
      </div>

    );
  }
}

export default App;
