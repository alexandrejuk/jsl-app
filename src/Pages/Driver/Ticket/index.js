import React, { Component } from 'react'
import TicketDriverContainer from '../../../Containers/Driver/TicketDriver'
import DriverTicketService from '../../../services/driver'

class TicketDriver extends Component {
  driverTicketService = null
  state = {
    driverTicket: {
      driver: {
        name: null,
        documentId: null,
        cpf: null,
      },
      vehicle: {
        plate: null,
        model: null,
        brand: null,
      },
      service: null,
      operation: {
        description: null
      },
      id: null
    },
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

  handlePrint = () => {
    return window.print()
  }

  render() { 
    const { driverTicket } = this.state
    return (
      <TicketDriverContainer 
        driverTicket={driverTicket}
        handlePrint={this.handlePrint}
      />
    )
  }
}
 
export default TicketDriver