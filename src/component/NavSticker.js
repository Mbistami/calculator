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
                backgroundColor: 'gray',
                position: 'absolute',
                marginLeft: '32%',
                display: 'none',
                boxShadow: '0 0 20px gray',
                marginTop: '10%',
                color: 'white',
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(this.state.containerStyle.display === 'none')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'block'}, history: this.props.state.history})
        else if (this.state.containerStyle.display !== 'none' && this.state.history !== '')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'none'}, history: this.props.state.history})
    }
    render(){
        return(
            <div id="NavSticker">
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