import React, { Component } from 'react'
import TicketDriverContainer from '../../../Containers/Driver/TicketDriver'
import DriverTicketService from '../../../services/driver'

class TicketDriver extends Component {
  driverTicketService = null
  state = {
    driverTicket: null,
    redirect: false
  }
  componentDidMount() {
    this.driverTicketService = new DriverTicketService()
    this.getTicketId()
  }
  
  getTicketId = async () => {
    const id = this.props.match.params.id
    try {
      const { data: driverTicket } = await this.driverTicketService.geticket(id)
      this.setState({ driverTicket })
    } catch (error) {
      console.log(error)
    }
  }

  render() { 
    const { driverTicket } = this.state
    return (
      <TicketDriverContainer driverTicket={driverTicket}/>
    )
  }
}
 
export default TicketDriver