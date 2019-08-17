import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import languages from './languages';
import LanguageDropdown from './LanguageDropdown';
import './Translator.css';

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
    axios.get(`${baseURL}?key=${key}&lang=${lang}&text=${text}`)
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

      
        <div className="Translator-texts">
          <div className="Translator-input">
            <Form grabInitialText={this.grabInitialText} />
          </div>

          <div className="Translator-response">
            <h1>{this.state.translatedMessage}</h1>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Translator;