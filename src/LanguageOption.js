import React, { Component } from 'react';
import './LanguageOption.css';

class LanguageOption extends Component {
  constructor(props){
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(){
    this.props.setLanguage(this.props.language.code);
    this.props.updateDropdownMessage(
    <div className="LanguageOption">
      <img className="LanguageOption-flag" src={this.props.language.flag} />
      <span>{this.props.language.value}</span>
    </div>)
  }

  render() {
    return (
      <div className="LanguageOption-dropdownOption" onClick={this.handleSetLanguage}>
        <img className="LanguageOption-flag" src={this.props.language.flag} />
        <span>{this.props.language.value}</span>
      </div>
    )
  }
}

export default LanguageOption;