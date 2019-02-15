import React from 'react'
import ReactDOM from 'react-dom'
import PlayForm from './PlayForm'
import {Requests} from 'rps/src/rps'

class App extends React.Component {
  render(){
    return <PlayForm requests={new Requests()}/>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
)