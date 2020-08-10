import React from 'react'
import { Button } from './Button'




export class ButtonPannel extends React.Component {
    
    render() {
        return (
        <div id="ButtonPannel">
                <Button onClick={this.props.onClick} name="C" value="C" />
                <Button onClick={this.props.onClick} name="()" value="()" />
                <Button onClick={this.props.onClick} name="%" value="%" />
                <Button onClick={this.props.onClick} name="/" value="/" />
                <br></br>
                <Button onClick={this.props.onClick} name="1" value="1" />
                <Button onClick={this.props.onClick} name="2" value="2" />
                <Button onClick={this.props.onClick} name="3" value="3" />
                <Button onClick={this.props.onClick} name="+" value="+" />
                <br></br>
                <Button onClick={this.props.onClick} name="4" value="4" />
                <Button onClick={this.props.onClick} name="5" value="5" />
                <Button onClick={this.props.onClick} name="6" value="6" />
                <Button onClick={this.props.onClick} name="-" value="-" />
                <br></br>
                <Button onClick={this.props.onClick} name="7" value="7" />
                <Button onClick={this.props.onClick} name="8" value="8" />
                <Button onClick={this.props.onClick} name="9" value="9" />
                <Button onClick={this.props.onClick} name="x" value="x" />
                <br></br>
                <Button onClick={this.props.onClick} name="0" value="0" />
                <Button onClick={this.props.onClick} name="=" value="=" />
                <Button onClick={this.props.onClick} name="," value="," />
        </div>
        );
    }
}