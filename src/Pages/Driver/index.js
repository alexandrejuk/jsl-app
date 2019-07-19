import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SearchTicket from './SearchTicket'
import TicketDriver from './Ticket'

class Driver extends Component {

  render () {
    return (
      <Switch>
        <Route path='/driver/search-ticket' component={SearchTicket} />
        <Route path='/driver/ticket/:id' component={TicketDriver} />
        <Redirect from='/' to='/driver/search-ticket' />
      </Switch>       
    ) 
  } 
}

export default Driver