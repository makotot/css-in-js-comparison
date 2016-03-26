import React from 'react'
import ReactDOM from 'react-dom'


export class Tab extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

