import React from 'react'


export class TabContent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const contents = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isShown: false
      })
    })

    return (
      <div>
        { contents }
      </div>
    )
  }
}

