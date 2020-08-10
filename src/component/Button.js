import React from 'react'
import  ButtonColors from "../functions/ButtonColors";
import './Button.css';


export class Button extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            btnStyle: {
                padding: 40,
                border: 'none',
                backgroundColor: 'rgb(37, 37, 37)',
                margin: 10,
                color: "#FFFFFF",
                bordeRadius: '50%',
                width: 'auto',
            }
       }
    }
    componentWillMount(){
        this.setState(ButtonColors(this.props.value, this.state));
    }
    render(){
     return (
     <button onClick={this.props.onClick} style={this.state.btnStyle} value={this.props.name}>{this.props.value}</button>
        );
    }
}