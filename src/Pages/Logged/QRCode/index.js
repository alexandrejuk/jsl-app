import React, { Component } from 'react'
import QRCodeContainer from '../../../Containers/QRCode'
import TicketService from '../../../services/ticket'

class QRCode extends Component {
  ticketService = null
  state = { }
  
  componentDidMount() {
    this.ticketService = new TicketService()
  }


  handleUpdateTicketQRCode = async(id) => {
    const docaId = this.props.match.params.docaId
    try {
      await this.ticketService.updateTicket({ docaId, id })
      window.location.href = '/#/logged/docas'
    } catch (error) {
      console.log(error)
    }
  }

  render() { 
    return (
      <QRCodeContainer handleUpdateTicketQRCode={this.handleUpdateTicketQRCode}/>
    )
  }
}
 
export default QRCode