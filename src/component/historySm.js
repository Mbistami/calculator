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
        return (
        <tr>
            <td>{this.props.first}</td>
            <td>{this.props.op}</td>
            <td>{this.props.second}</td>
        </tr>
        );
    }
}