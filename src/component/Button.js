import React from 'react'
import  isNumber from "../functions/isNumber";
import './Button.css';

const Red = "#FF0000"
const Green = "#32CD32"
const White = "#FFFFFF"


export class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            btnStyle: {
                padding: 40,
                border: 'none',
                backgroundColor: 'rgb(37, 37, 37)',
                margin: 10,
                color: White,
                bordeRadius: '50%',
                width: 'auto',
            }
       }
    }
    componentWillMount(){
        if(!isNumber(this.props.value) && this.props.value !== 'C')
        {
            this.setState({btnStyle:{...this.state.btnStyle,color: Green}})
        }
        else if(this.props.value === 'C')
        {
            this.setState({btnStyle:{...this.state.btnStyle,color: Red}})
        }
        if (this.props.value === '=')
        {
            this.setState({btnStyle:{...this.state.btnStyle,backgroundColor: '#006400', width:189}})
        }
        else if(this.props.value === '0')
        this.setState({btnStyle:{...this.state.btnStyle, width:97}})
    }
    render(){
     return (
     <button onClick={this.props.onClick} style={this.state.btnStyle} value={this.props.name}>{this.props.value}</button>
        );
    }
}