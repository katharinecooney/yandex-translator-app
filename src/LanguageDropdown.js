import React, { Component } from 'react';
import {Dropdown, Flag} from 'semantic-ui-react';
import './LanguageDropdown.css';


const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    
  },
]

class LanguageDropdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: ''
    }
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(){
    this.props.setLanguage(this.props.languages.code)
  }
  render(){
    return(
<Dropdown
    text='Choose Language'
    floating
    labeled
    button
    className='Dropdown icon'
    
  >
    <Dropdown.Menu>
      <Dropdown.Header content='Choose Language' />
      {this.props.languages.map(option => ( <span onClick={() => this.props.setLanguage(option.code)} className="LanguageDropdown-option">
        <Flag name={option.code} />
        <Dropdown.Item key={option.value} {...option} />
      </span>
        
      ))}
    </Dropdown.Menu>
  </Dropdown>
    )
  }
}

export default LanguageDropdown;

