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
        <ul>
          <li>
            <Checkbox name="checkbox-a" id="checkbox-a" text="checkbox A" />
          </li>
          <li>
            <Checkbox name="checkbox-b" id="checkbox-b" text="checkbox B" />
          </li>
          <li>
            <Checkbox name="checkbox-c" id="checkbox-c" text="checkbox C" />
          </li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
