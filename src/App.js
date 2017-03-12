import React, { Component } from 'react';
import './App.css';
import InputBar from './components/InputBar'
import ClockTimer from './components/ClockTimer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {output:''}
    this.parentHandleChange = this.parentHandleChange.bind(this);
  }

  parentHandleChange(value) {
    console.log(value)
    let parsedDate = Date.parse(value)
    console.log(parsedDate)
    this.setState({output: parsedDate})

 }

  render() {
    return (
      <div>
        <InputBar onValueChange={this.parentHandleChange} />
        <ClockTimer start={Date.now()} value={this.state.output}  />
      </div>

    );
  }
}

export default App;
