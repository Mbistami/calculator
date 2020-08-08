import React from 'react';
import { ButtonPannel } from './component/ButtonPannel'
import Calculate from './component/Calculate'
import calcul from './functions/calcul'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        result: null,
        firstSelect: null,
        operator: null,
      }
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e) {
    this.setState(calcul(e.target.value, this.state))
  };
  render(){
    return (
    <div className="App">
      <head>
        <title>Hello, Calculator!</title>
      </head>
      <Calculate value={ this.state.result } firstSelect={this.state.firstSelect} operator={this.state.operator} />
      <ButtonPannel onClick={this.handleClick} />
    </div>
  );
  }
}
