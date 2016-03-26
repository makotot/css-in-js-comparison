import React from 'react'


export class TabNavItem extends React.Component {

  constructor (props) {
    super(props)
  }

  handleClick () {
  }

  render () {
    return (
      <a href="#" onClick={ this.handleClick.bind(this) }>
        { this.props.children }
      </a>
    )
  }
}

