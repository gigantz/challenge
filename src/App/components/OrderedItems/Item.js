import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
*  Item inside ordered items
*/

export default class OrderedItems extends Component {

  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  /**
   * propTypes
   * @property {object} passedProps item object from items array
   */

  static propTypes = {
    data: PropTypes.shape({
      sequence: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      product: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string
      })
    }).isRequired,
    onSelect: PropTypes.func
  }

  onChecked = () => {
    const { onSelect, data } = this.props
    onSelect(data.id)
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    const { imageUrl, name, description } = this.props.data.product

    return (
      <div className='ordered-items__ordered-item checkboxes'>
        <div className='ordered-item__list'>
          <label htmlFor={'box' + this.props.data.id}>
            <input
              id={'box' + this.props.data.id}
              type='checkbox'
              onChange={this.onChecked}
              checked={this.state.checked} />
          </label>
        </div>
        <div className='ordered-item__image'>
          <img width={57} height={57} src={imageUrl} />
        </div>
        <div className='ordered-item__info'>
          <div className='ordered-item__info__name'>{name}</div>
          <div className='ordered-item__info__description'>{description}</div>
        </div>
      </div>
    )
  }

}
