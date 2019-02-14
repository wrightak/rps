import React from 'react'

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 'Ready to Play!'
        }
    }

    invalid() {
        this.setState({result: 'Invalid'})
    }

    submitButtonWasClicked() {
        this.props.requests.play('', '', this)
    }

    render() {
        return (
            <div>
                <div>RPS App</div>
                <div>{this.state.result}</div>
                <button onClick={this.submitButtonWasClicked.bind(this)}>Submit</button>
            </div>
        )
    }
}