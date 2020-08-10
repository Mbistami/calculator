import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { ButtonPannel } from './component/ButtonPannel';
import Calculate from './component/Calculate';
import HistorySm from './component/historySm';
import calcul from './functions/calcul';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        result: null,
        firstSelect: null,
        operator: null,
        history: []
      }
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick (e) {
    if(e.target.value === '=' && this.state.firstSelect !== null){
      this.setState({
        history: [...this.state.history, <HistorySm first={this.state.firstSelect} second={this.state.result} op={this.state.operator}/>]
      });
    }
    this.setState(calcul(e.target.value, this.state))
  };
  render(){
    return (
    <div className="App">
      <head>
        <title>Hello, Calculator!</title>
      </head>
      <Container>
        <Row>
          <Col>
            <Calculate value={ this.state.result } firstSelect={this.state.firstSelect} operator={this.state.operator} />
          </Col>
          <Col>
            <ButtonPannel onClick={this.handleClick} />
          </Col>
          <Col>
            <div id="history">
              <table>
                {this.state.history}
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}
