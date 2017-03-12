import React from 'react';

class ClockTimer extends React.Component {

  constructor (props) {
    super(props)
    this.state={count: 0}
    this.tick = this.tick.bind(this)
    this.state={value : this.props.value}
  }

componentDidMount (){
  this.interval = setInterval(this.tick, 1000)
}

tick () {
  var givenDay = this.props.value/1000/60/60/24
  var startDay = this.props.start

   this.setState({count: givenDay - startDay })

 }

  render(){
    return(

      <div>
        <h1> {this.state.count} </h1>

      </div>
    )
  }

componentWillUnmount(){
      clearInterval(this.interval);
   }

}

export default ClockTimer;
