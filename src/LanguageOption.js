import React, { Component } from 'react';
import {Flag} from 'semantic-ui-react';

class LanguageOption extends Component {
  constructor(props){
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(){
    this.props.setLanguage(this.props.language.code);
    this.props.updateDropdownMessage(
    <div>
    <Flag name={this.props.language.code} /><span>{this.props.language.value}</span>
    </div>)
  }

  render() {
    return (
      <div onClick={this.handleSetLanguage}>
        <Flag name={this.props.language.code} />
        <span>{this.props.language.value}</span>
      </div>
    )
  }
}

export default LanguageOption;