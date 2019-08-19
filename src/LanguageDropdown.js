import React, { Component } from 'react';
import {Dropdown, Flag} from 'semantic-ui-react';
import LanguageOption from './LanguageOption';
import './LanguageDropdown.css';

class LanguageDropdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownMessage: 'Choose Language'
    }
    this.updateDropdownMessage = this.updateDropdownMessage.bind(this)
  }

  updateDropdownMessage(choosenLanguage){
    this.setState({
      dropdownMessage: choosenLanguage
    })
  }
  

  render(){
    return(
    <Dropdown
      text={this.state.dropdownMessage}
      floating
      labeled
      button
      className='LanguageDropdown icon'
    >
    <Dropdown.Menu>
      <Dropdown.Header />
      {this.props.languages.map(language => (
        <LanguageOption 
          language={language} 
          setLanguage={this.props.setLanguage} 
          updateDropdownMessage={this.updateDropdownMessage}
          selectedLanguage={this.props.selectedLanguage} 
        />
      ))}
    </Dropdown.Menu>
  </Dropdown>
    )
  }
}

export default LanguageDropdown;

