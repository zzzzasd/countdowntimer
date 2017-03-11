import React from 'react';

class ClockTimer extends React.Component {

  constructor (props) {
    super(props)
    this.state={count: 0}
    this.tick = this.tick.bind(this)
  }

componentDidMount (){
  this.interval = setInterval(this.tick, 1000)
}

tick () {
   this.setState({count: this.state.value - this.props.start})
   if (this.state.count <=0) {
     clearInterval(this.interval)
   }
 }

  render(){
    const seconds = (this.state.count)
    return(

      <div>
        <h1> {seconds} </h1>

      </div>
    )
  }

componentWillUnmount(){
      clearInterval(this.interval);
   }

}

export default ClockTimer;
