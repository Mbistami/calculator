import React from 'react'
import './Calculate.css'

export default class Calculate extends React.Component {
    
    render(){
        return(
            <div id="Show">
                <div id="Monitor">{this.props.value}</div>
                <div id="firstSelect">{this.props.firstSelect}</div>
                <div id="operator">{this.props.operator}</div>
            </div>
        );
    }
}