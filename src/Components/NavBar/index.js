import React, { Component } from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const { docasOperation, docasAvailable } = this.props
    return (
      <div className='navBarMobileDocas'>
        <div className='navBarMobileDocaHeader'>
          <div className='navBarMobileDocaHeaderTitle'>
            <h1>Docas</h1>
          </div>
          <div className='navBarMobileDocaHeaderInfo'>
            <div>
              <span className='navBarMobileDocaHeadeIcon navBarMobileDocaHeadeIconSuccess'></span>
              <h1 className='navBarMobileDocaHeaderInfoTitle'>{docasAvailable}</h1>
              <p className='navBarMobileDocaHeaderInfoSubTitle'>disponíveis</p>
            </div>
            <div>
              <span className='navBarMobileDocaHeadeIcon navBarMobileDocaHeadeIconDanger'></span>
              <h1 className='navBarMobileDocaHeaderInfoTitle'>{docasOperation}</h1>
              <p className='navBarMobileDocaHeaderInfoSubTitle'>em operação</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 


export default NavBar