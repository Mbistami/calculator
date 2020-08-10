import React from 'react'
import './historySm.css'

export default class HistorySm extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            first: this.props.firstSelected,
            second: this.props.result,
            op: this.props.operator,
        };
    }
    render(){
        const style={
            
        };

        return (
        <tr>
            <td><h1 id="first">{this.props.first}</h1></td>
            <td><p id="op">{this.props.op}</p></td>
            <td><h1 id="second">{this.props.second}</h1></td>
        </tr>
        );
    }
}