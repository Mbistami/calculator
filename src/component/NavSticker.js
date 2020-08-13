import React from 'react'
import historySm from './historySm'

export default class NavSticker extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            history: [this.props.state.history],
            containerStyle: {
                height: '40%',
                width: '40%',
                backgroundColor: 'white',
                position: 'absolute',
                marginLeft: '32%',
                display: 'none',
                boxShadow: '0 0 20px gray',
                marginTop: '10%',
                color: 'white',
            },
            closerStyle: {
               height: '100%',
               width: '100%',
               position: 'absolute',
               opacity: '0.5',
               backgroundColor: 'transparent',
               cursor: 'initial',
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(this.state.containerStyle.display === 'none')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'block'}, history: this.props.state.history, closerStyle:{...this.state.closerStyle, backgroundColor: 'black', cursor: 'pointer'}})
        else if (this.state.containerStyle.display !== 'none' && this.state.history !== '')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'none'}, history: this.props.state.history, closerStyle:{...this.state.closerStyle, backgroundColor: 'transparent',cursor: 'initial'}})
    }
    render(){
        return(
            <div id="NavSticker">
                <div id="closer" style={this.state.closerStyle} onClick={this.handleClick}>s</div>
                <div class="container" style={this.state.containerStyle} >
                    <table id="historique">
                        <thead>
                            <tr>
                                <th>First</th>
                                <th>Operator</th>
                                <th>Second</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.history}
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
                <span class="material-icons" onClick={this.handleClick}>history</span>
            </div>
        );
    }
}