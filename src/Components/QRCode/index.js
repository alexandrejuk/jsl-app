import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class QRCode extends Component {

  handleScan = data => {
    if(data) {
      return this.props.handleUpdateTicketQRCode(data)
    }
  }

  render() { 
    return (
     <QrReader
        delay={300}
        onError={() => console.log('error')}
        onScan={this.handleScan}
        style={{ width: '100%' }}
      /> 
    )
  }
}
 
export default QRCode;