import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import request from '../../services/request'

import Doca from './Doca'
import QRCode from './QRCode'

class Logged extends Component {
  constructor(props){
    super(props)

    request.forceRenewAxiosInstance()
  }

  render () {
    return (
      <Switch>
        <Route exact path='/logged/docas' component={Doca} />
        <Route path='/logged/docas/:docaId/qrcode' component={QRCode} />
        <Redirect from='/' to='/logged/docas' />
      </Switch>       
    ) 
  } 
}

export default Logged