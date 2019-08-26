import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import Form from '../Form/Form';
import languages from '../Languages/languages';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import './Translator.css';
import {avatar1, avatar2} from '../Avatars/avatars';

const baseURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const key = process.env.REACT_APP_YANDEX_KEY;


class Translator extends Component {
  constructor(props){
    super(props);
    this.state = {
      translatedMessage: '',
      initialText: '',
      language: '',
      isLanguageSelected: false,
      isLoading: false
    }
    this.grabInitialText = this.grabInitialText.bind(this);
    this.translateText = this.translateText.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang){
    this.setState({
      language: lang,
      isLanguageSelected: true
    })
  }

  grabInitialText(userInput){
    this.setState({
      initialText: userInput,
      isLoading: true
    }, () => this.translateText())
  }

  translateText(){
    const text = this.state.initialText;
    const lang = this.state.language;

    axios.get(`${baseURL}?key=${key}&lang=${lang}&text=${text}`)
      .then(result => {
        // text is an array
        this.setState({
          translatedMessage: result.data.text[0],
          isLoading: false
        });
      })
      .catch (error => 
        this.setState({
          translatedMessage: '**SELECT A LANGUAGE AND ENTER YOUR TEXT**',
          isLoading: false
        }))
    } 

  render() {
    return (
      <div className="Translator">
        <div className="Translator-languageSelector">
          <h1>I want to learn</h1>
          <LanguageDropdown isLanguageSelected={this.state.isLanguageSelected} setLanguage={this.setLanguage} selectedLanguage={this.state.language} languages={languages} />
        </div>
        
        <Grid className="Translator-texts" columns='two' stackable divided>
          <Grid.Column className="Translator-column">
            <div className="Translator-column-inner">
              
              <img className="Translator-avatar Translator-avatar-input" src={avatar1} alt="randomly selected avatar"/> 
              <Form grabInitialText={this.grabInitialText} />
            </div>
          </Grid.Column>
          
          <Grid.Column className="Translator-column">
            <div className="Translator-column-inner">
              <div className="Translator-speechBlurb">
                
                {
                  this.state.isLoading 
                  ? <div className="loader more"></div>
                  : <p>{this.state.translatedMessage}</p> 
                }
                
              </div>
              <img className="Translator-avatar Translator-avatar-response" src={avatar2} alt="randomly selected avatar"/> 
            </div>  
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default Translator;