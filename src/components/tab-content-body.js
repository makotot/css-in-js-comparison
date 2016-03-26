import React from 'react'


export class TabContentBody extends React.Component {

  static get PropTypes () {
    return {
      isShown: React.PropTypes.bool.isRequired,
    }
  }

  static get defaultProps () {
    return {
      isShown: false
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const displayStyle = this.props.isShown ? '' : 'none'
    const style = {
      display: displayStyle,
    }

    return (
      <div style={ style }>
        { this.props.children }
      </div>
    )
  }
}

