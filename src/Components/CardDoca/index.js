import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import { pack, service } from '../../assets'

class CardDoca extends Component {
  docaTypeStatus = {
    available: 'DISPONÍVEL',
    operation: 'EM OPERAÇÃO',
  }

  docaTypeStatusColor = {
    available: '#F1603B',
    operation: 'cardDocaSubTitleDanger',
  }

  render() {
    const { doca } = this.props
    const ticket = doca.tickets.find(ticket => ticket.status === 'waiting_service' || ticket.status === 'start_service')
    return (
      <Card className='cardDoca'>
        <a className='link-none-style' href={`#logged/docas/${doca.id}/qrcode`}>
          <Card.Body>
            <div className='cardDocaBody'>
              <div className='cardDocaBodyImageWrapper'>
                <img className='cardDocaBodyImage' src={ticket ? pack : service} alt='icon doca' />
              </div>
              <div className='cardDocaBodyTitle'>
                <div>
                  <h3 className='cardDocaTitle'>Doca {doca.docaNumber}</h3>
                  
                  { ticket ?
                      <div className='cardDocaSubTitle'>
                      {ticket.operation.description}
                      </div> :
                      null
                  }    
                  <div 
                    className={`cardDocaSubTitle  ${this.docaTypeStatusColor[doca.status]}`}
                  >
                    {this.docaTypeStatus[doca.status]}
                  </div>
                </div>
                <i className='fa fa-angle-right' aria-hidden="true"></i>
              </div>
            </div>
          </Card.Body>
        </a>
      </Card>
    )
  }
}
 


export default CardDoca