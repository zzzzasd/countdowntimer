import React from 'react';

class InputBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
      this.setState({value: event.target.value})
       this.props.onValueChange(event.target.value);
  }

  handleSubmit(event) {
    alert('A date for countdown was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleClick() {
    console.log('Link clicked!')
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <label>
        Date:
        <input type="Date" value={this.props.value} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleClick}> </button>

      </form>
    );
  }
}

export default InputBar;
