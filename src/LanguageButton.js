import React, { Component } from 'react';
import './LanguageButton.css';
import Italy from './italy.png'


class LanguageButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: ''
    }
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(){
    this.props.setLanguage(this.props.language.code)
  }

  render() {
    return (
        <button className="LanguageButton" onClick={this.handleSetLanguage}>
          <p>{this.props.language.name}</p>
          <img src={this.props.language.flag} alt=""/>
        </button>
    )
  }
}

export default LanguageButton;