import React, { Component } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import defaultText from './defaultText';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText
    }
  }

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  }

  clearText = () => {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <div className="container">
          <Editor text={this.state.text} handleInputChange={this.handleInputChange} clearText={this.clearText} />
          <Preview text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
