import React, { Component } from 'react'
import QRCode from '../../Components/QRCode'
import './index.css'
import { qrcode } from '../../assets'

class QRCodeContainer extends Component {  
  render() {
    const { handleUpdateTicketQRCode } = this.props
    return (
      <div className='qrcodeContainer'>
        <QRCode handleUpdateTicketQRCode={handleUpdateTicketQRCode} />
        <div className='qrcodeWrapper'>
          <div className='qrcodeImageExampleWrapper'>
            <img className='qrcodeImageExample' src={qrcode} alt='example qrcode' />
          </div>
          <div className='qrcodeHeader'>
            <h3 className='qrcodeHeaderTitle'>
              JSL Cross App
            </h3>
            <p className='qrcodeHeaderSubTitle'>Escanear Código QR</p>
            <p className='qrcodeHeaderSubTitle'>Para iniciar ou finalizar uma operação nas docas.</p>
          </div>
        </div>
      </div>
    )
  }
}
 


export default QRCodeContainer