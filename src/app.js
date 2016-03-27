import React from 'react'
import ReactDOM from 'react-dom'

import Checkbox from './components/checkbox'


class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Checkbox name="check" id="checkbox" text="checkbox" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
