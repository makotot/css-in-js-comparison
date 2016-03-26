import React from 'react'


export class TabNav extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <nav>
        { this.props.children }
      </nav>
    )
  }
}

