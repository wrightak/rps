import React from 'react'

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 'Ready to Play!'
        }
    }

    p1Wins() {
        this.setState({result: 'P1 Wins'})
    }

    p2Wins() {
        this.setState({result: 'P2 Wins'})
    }

    tie() {
        this.setState({result: 'Tie'})
    }

    invalid() {
        this.setState({result: 'Invalid'})
    }

    input1Changed(event) {
        this.setState({p1Hand: event.target.value})
    }

    input2Changed(event) {
        this.setState({p2Hand: event.target.value})
    }

    submitButtonWasClicked() {
        this.props.requests.playRound(this.state.p1Hand, this.state.p2Hand, this)
    }

    render() {
        return (
            <div>
                <div>RPS App</div>
                <input name='player1' onChange={this.input1Changed.bind(this)}/>
                <input name='player2' onChange={this.input2Changed.bind(this)}/>
                <button onClick={this.submitButtonWasClicked.bind(this)}>Submit</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}