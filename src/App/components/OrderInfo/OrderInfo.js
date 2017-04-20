import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

/**
*  Info about order
*/

export default class OrderInfo extends Component {

  /**
   * propTypes
   * @property {string} fetchedStatus status of order
   * @property {door} fetchedName name of assignee
   * @property {datitime} fetchedDatetime Assigned at
   */

  static propTypes = {
    status: PropTypes.string.isRequired,
    door: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired
  }

  render () {
    const { status, door, datetime } = this.props

    return (
      <div className='order-info'>
        <div className='order-info__status'>
          <b>Status</b> ● {status === 'INPROGRESS' ? 'In progress' : 'n/a'}
        </div>
        <div className='order-info__door'>
          <b>Door</b> {door}
        </div>
        <div className='order-info__om'>
          <b>Om</b> {moment(datetime).format('hh:mm (YYYY-MM-DD)')}
        </div>
      </div>
    )
  }

}
