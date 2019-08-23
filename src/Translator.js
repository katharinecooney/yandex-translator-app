import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import Form from './Form';
import languages from './languages';
import LanguageDropdown from './LanguageDropdown';
import './Translator.css';
import {avatar1, avatar2} from './avatars';

const baseURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const key = process.env.REACT_APP_YANDEX_KEY;


class Translator extends Component {
  constructor(props){
    super(props);
    this.state = {
      translatedMessage: '',
      initialText: '',
      language: ''
    }
    this.grabInitialText = this.grabInitialText.bind(this);
    this.translateText = this.translateText.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  grabInitialText(userInput){
    this.setState({
      initialText: userInput
    }, () => this.translateText())
  }

  translateText(){
    const text = this.state.initialText;
    const lang = this.state.language;

  lang === '' 
  ? this.setState({
    translatedMessage: '**PLEASE SELECT LANAGUAGE**'
  }) 
  : axios.get(`${baseURL}?key=${key}&lang=${lang}&text=${text}`)
      .then(result => {
        // text is an array
        this.setState({
          translatedMessage: result.data.text[0]
        });
        console.log(result.data.text[0])
      })
    }

  setLanguage(lang){
    this.setState({
      language: lang
    })
  }

  render() {
    return (
      <div className="Translator">
        <div className="Translator-languageSelector">
          <h1>I want to learn</h1>
          <LanguageDropdown setLanguage={this.setLanguage} selectedLanguage={this.state.language} languages={languages} />
        </div>
        
        <Grid className="Translator-texts" columns='two' stackable divided>
          <Grid.Column className="Translator-column">
            <div className="Translator-column-inner">
              
              <img className="Translator-avatar Translator-avatar-input" src={avatar1} alt=""/> 
              <Form grabInitialText={this.grabInitialText} />
            </div>
          </Grid.Column>
          
          <Grid.Column className="Translator-column">
            <div className="Translator-column-inner">
              <div className="Translator-speechBlurb">
                <p>{this.state.translatedMessage}</p>
              </div>
              <img className="Translator-avatar Translator-avatar-response" src={avatar2} alt=""/> 
            </div>  
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default Translator;