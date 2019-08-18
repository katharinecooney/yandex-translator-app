import React, { Component } from 'react';
import {Flag} from 'semantic-ui-react';
import './LanguageOption.css';

class LanguageOption extends Component {
  constructor(props){
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(){
    this.props.setLanguage(this.props.language.code);
    this.props.updateDropdownMessage(
    <div>
    <Flag className="LanguageOption-flag" name={this.props.language.code} /><span>{this.props.language.value}</span>
    </div>)
  }

  render() {
    return (
      <div className="LanguageOption" onClick={this.handleSetLanguage}>
        <Flag name={this.props.language.code} />
        <span>{this.props.language.value}</span>
      </div>
    )
  }
}

export default LanguageOption;