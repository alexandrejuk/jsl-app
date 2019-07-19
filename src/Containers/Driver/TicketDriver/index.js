import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import { TicketLogo } from '../../../assets'

import './index.css'

class TicketDriver extends Component {  
  render() {
    return (
      <div className='content--main'>
        <div className='content-title--main'>
          <div className='logo-check'>
            <i className='fa fa-check' aria-hidden='true'></i>
          </div>
          <h2>Seu ticket de acesso!</h2>
          <h4 className='ticket-accesso-title'>Agora vá até ao local reservado aos motoristas e apresente o Ticket de Acesso JSL Cross abaixo </h4>
        </div>
        <div className='card-ticket'>
          <img className='logo' src={TicketLogo} alt='ticket logo' />
          <div className='rip'>
            <div className='line-solid'></div>
          </div>
          <div className='card-content'>
            <h3>Ticket de Acesso</h3>
            <QRCode size={160} value='Alexandre Santos' />
          </div>
          <div className='card-header'>
            <p>Nome <strong>Alexandre dos santos soares</strong></p>
            <p>CPF <strong>222.333.444-45</strong></p>
            <p>Veículo <strong>F4000 FORD PLH-2234</strong></p>
            <p>Operação<strong>Hyundai do Brazil LTDA</strong></p>
            <p className='noline-card-ticket-driver'>Tipo de Serviço<strong>Carregar</strong></p>
          </div>
          <div className='rip'>
            <div className='line-dash'></div>
          </div>

          <div className='card-footer'>
            <p className='card-footer--alert'>Para garantir a segurança em nossas operações você deve apresentar esse ticket nas docas. Esse ticket tem válidade única.</p>
          </div>
          <div className='content-footer--main'>
            <h6>Você pode apresentar o ticket pelo celular ou impresso</h6>
            <button className='btn-default'>Salvar PDF</button>
          </div>
        </div>
      </div>
    )
  }
}
 


export default TicketDriver