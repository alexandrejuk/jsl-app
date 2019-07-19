import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './index.css'
import { pack } from '../../assets'

class CardDoca extends Component {
  docaTypeStatys = {
    available: 'DISPONÍVEL',
    operation: 'EM OPERAÇÃO',
  }

  render() {
    const { doca } = this.props
    return (
      <Card className='cardDoca'>
        <a className='link-none-style' href={`#logged/docas/${doca.id}/qrcode`}>
          <Card.Body>
            <div className='cardDocaBody'>
              <div className='cardDocaBodyImageWrapper'>
                <img className='cardDocaBodyImage' src={pack} alt='icon doca' />
              </div>
              <div className='cardDocaBodyTitle'>
                <div>
                  <h3 className='cardDocaTitle'>Doca {doca.docaNumber}</h3>
                  <div className='cardDocaSubTitle'>{this.docaTypeStatys[doca.status]}</div>
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