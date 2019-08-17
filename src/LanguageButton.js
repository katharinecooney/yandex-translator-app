import React, { Component } from 'react';


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
    const active = this.props.selectedLanguage === this.props.language.code ? "LanguageButton active" : "LanguageButton";
    return (
        <button className={active} onClick={this.handleSetLanguage}>
          <p>{this.props.language.name}</p>
          <img src={this.props.language.flag} alt=""/>
        </button>
    )
  }
}

export default LanguageButton;