import axios from 'axios';

import React, { Component } from 'react'

const baseURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const key = process.env.REACT_APP_YANDEX_KEY;
const text = "Hello, my friend!";
const lang = "es";


class Translator extends Component {

  componentDidMount(){
    axios.get(`${baseURL}?key=${key}&lang=${lang}&text=${text}`)
      .then(result => {
        // text is an array
        console.log(result.data.text[0])
      })
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

export default Translator;