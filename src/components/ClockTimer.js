import React from 'react';

class ClockTimer extends React.Component {

  constructor (props) {
    super(props)
    this.state={count: 0}
    this.tick = this.tick.bind(this)
    this.state={value: this.props.value}
  }

  componentDidMount (){
    this.interval = setInterval(this.tick, 1000)
  }

  tick () {
    console.log ("this.props.value", this.props.value)
    console.log ("this.props.start", this.props.start)
    console.log("Asdasd", typeof this.props.value)
    this.setState({count: (this.props.value - this.props.start)/86400000 })
  }

  render(){
    return(
      <div>
        <h1> {Math.round(this.state.count)} days left </h1>
      </div>
    )
  }

  componentWillUnmount(){
    clearInterval(this.interval);
   }

}

export default ClockTimer;
