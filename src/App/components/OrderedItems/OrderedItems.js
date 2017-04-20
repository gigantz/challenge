import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

/**
*  Ordered items of customer
*/

export default class OrderedItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: []
    }
  }

  /**
   * propTypes
   * @property {array} fetchedArray array of items
   */

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  onChecking = (id) => {
    let checked = this.state.checked
    if (checked.indexOf(id) > -1) {
      checked.splice(checked.indexOf(id), 1)
    } else {
      checked.push(id)
    }
    this.setState({
      checked
    })
  }

  render () {
    return (
      <div className='ordered-items'>
        {this.props.items.sort((a, b) => a.sequence > b.sequence).map(item =>
          <Item data={item} key={item.id} onSelect={this.onChecking} />
        ) }
        <p>Selected: {this.state.checked.length} / {this.props.items.length}</p>
      </div>
    )
  }

}
