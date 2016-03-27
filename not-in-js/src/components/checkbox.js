import React from 'react'


export default class Checkbox extends React.Component {

  static get PropTypes () {
    return {
      name: React.PropTypes.string,
      id: React.PropTypes.string,
      text: React.PropTypes.string,
    }
  }

  static get defaultProps () {
    return {
      name: '',
      id: '',
      text: '',
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="checkbox">
        <input type="checkbox" name={ this.props.name } id={ this.props.id } className="checkbox__input" />
        <label htmlFor={ this.props.id } className="checkbox__label">{ this.props.text }</label>
      </div>
    )
  }
}
