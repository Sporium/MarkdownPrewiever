import React, {Component} from 'react';
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

//import FormGroup from 'react-bootstrap/lib/FormGroup'
//import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/lib/FormControl';

//import React, {Component} from 'react';
import {
  FormControl,
  FormGroup,
  FormLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button
} from 'react-bootstrap';

class App extends Component {

  state = {
    markdown: `# Chalange for FCC: MarkdownPreviewer
    
`
  }
  //Updates the state to markdown value which is called on change of formcontrol
  updateMarkdown = function(markdown) {
    this.setState({markdown})

  }

  render() {
    let {markdown} = this.state;
    // marked.sanitize = true;
    console.log(markdown);
    return (<div className="App container">
      <div>
        <FormGroup contorlid="formControlsTextarea">
          <FormLabel>Markdown Input</FormLabel>
          <FormControl componentClass="textarea" placeholder="Enter MArkdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
        </FormGroup>
      </div>
      <div>
        <h1>Markdown Output</h1>
        {/* Converts string version of html into actual html */}
        <div dangerouslySetInnerHTML = {{__html:marked(markdown)}}>

        </div>
      </div>
    </div>);
  }
}

export default App;
