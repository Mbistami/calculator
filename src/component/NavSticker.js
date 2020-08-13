import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import historySm from './historySm'

export default class NavSticker extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            history: [this.props.state.history],
            containerStyle: {
                height: 'max-content',
                width: 'max-content',
                backgroundColor: 'white',
                position: 'absolute',
                display: 'none',
                boxShadow: '0 0 20px gray',
                marginTop: '10%',
                color: 'white',
            },
            closerStyle: {
               height: '100%',
               width: '10%',
               position: 'absolute',
               opacity: '0.5',
               backgroundColor: 'transparent',
               cursor: 'initial',
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
    
        if(this.state.containerStyle.display === 'none' && e.target.id !== 'closer')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'block'}, history: this.props.state.history, closerStyle:{...this.state.closerStyle, backgroundColor: 'black', cursor: 'pointer',width: '100%'}})
        else if (this.state.containerStyle.display !== 'none' && this.state.history !== '')
            this.setState({containerStyle:{...this.state.containerStyle, display: 'none'}, history: this.props.state.history, closerStyle:{...this.state.closerStyle, backgroundColor: 'transparent',cursor: 'initial', width: '0%'}})
    }
    render(){
        return(
            <div class="d-flex justify-content-center" id="NavSticker">
                <div id="closer" style={this.state.closerStyle} onClick={this.handleClick}></div>
                            <div class="container" style={this.state.containerStyle} >
                                <div class="row">
                                    <div class="col d-flex justify-content-center">
                                    <table class="" id="historique">
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
                                </div>
                            </div>
                <span class="material-icons" onClick={this.handleClick}>history</span>
            </div>
        );
    }
}