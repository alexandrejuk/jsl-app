import React, { Component } from 'react'
import QRCodeContainer from '../../../Containers/QRCode'
import DocaService from '../../../services/doca'

class QRCode extends Component {
  docaService = null
  state = { }
  
  componentDidMount() {
    this.docaService = new DocaService()
  }

  render() { 
    return (
      <QRCodeContainer />
    )
  }
}
 
export default QRCode