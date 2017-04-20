import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
*  Info about customer
*/

export default class CustomerInfo extends Component {

  /**
   * propTypes
   * @property {string} fetchedCustomerEmail customer email
   * @property {string} fetchedCustomerPhone customer phone number
   * @property {string} fetchedCustomerDatetime customer's ordered datetime
   */

  static propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired
  }

  render () {
    const { email, phone, datetime } = this.props

    return (
      <div className="customer-info">
        <div className="customer-info__datetime">
          <b>Assigned at:</b> {datetime}
        </div>
        <div className="customer-info__email">
          <b>Email:</b> {email}
        </div>
        <div className="customer-info__phone">
          <b>Phone:</b> {phone}
        </div>
      </div>
    )
  }

}
