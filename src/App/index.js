import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import CustomerInfo from './components/CustomerInfo'
import OrderInfo from './components/OrderInfo'
import OrderedItems from './components/OrderedItems'
import './App.less'

/**
*  Main App container
*/

export default class App extends Component {

  constructor (props) {
    super(props)

/**
 * @type {object}
 * @property {boolean} isLoading loading indicator
 */
    this.state = {
      isLoading: true
    }
  }

  /**
 * componentDidMount
 * fetching data into state
 */

  componentDidMount () {
    fetch('/data.json')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoading: false,
          ...result.data
        })
      })
  }

  render () {
    const { placedAt, customer, assignee, status, assignedAt, items } = this.state

    return (
      <div className='app__main'>
        {this.state.isLoading
          ? <div>Loading</div>
          : <div>
            <Header maintitle={customer.name} subtitle={customer.id} />
            <CustomerInfo email={customer.email} phone={customer.phoneNumber} datetime={placedAt} />
            <OrderInfo status={status} door={assignee.name} datetime={assignedAt} />
            <OrderedItems items={items} />
          </div> }
      </div>
    )
  }

}
