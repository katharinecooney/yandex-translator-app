import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('submitted');
    // call a method from the parent
    this.props.grabInitialText(this.state.initialText)
    this.setState({
      initialText: ''
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.initialText}
          // needs to 
          name="initialText"
          onChange={this.handleChange}
          id="initialText"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;