import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
*  General header with Main title and subtile
*/

export default class Header extends Component {

  /**
   * propTypes
   * @property {string} pageMainTitle page main title
   * @property {string} pageSubTitle page subtitle
   */

  static propTypes = {
    maintitle: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }

  render () {
    const { maintitle, subtitle } = this.props

    return (
      <div className='header'>
        <div className='header__maintitle'>{maintitle}</div>
        <div className='header__subtitle'>{subtitle}</div>
      </div>
    )
  }

}
