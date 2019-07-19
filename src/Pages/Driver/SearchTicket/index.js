import React, { Component } from 'react'
import SearchTicketContainer from '../../../Containers/Driver/SearchTicket'
import DriverTicketService from '../../../services/driver'
import { Redirect } from 'react-router-dom'

class SearchTicket extends Component {
  driverTicketService = null
  state = {
    driverTicketId: null,
    redirect: false
  }
  componentDidMount() {
    this.driverTicketService = new DriverTicketService()
  }
  
  searchDriverTicketId = async (values) => {
    try {
      const { data } = await this.driverTicketService.getIdDriverTicket(values)
      this.setState({ driverTicketId: data.tickets[0].id })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { driverTicketId, redirect } = this.state
    return (
      <>
       { driverTicketId && redirect ? 
        <Redirect 
          from='/driver/search-ticket' 
          to={`/driver/ticket/${driverTicketId}`}
        /> : null }
        <SearchTicketContainer 
          handleSearchTicket={this.searchDriverTicketId}
        />
      </>
    )
  }
} 
 
export default SearchTicket