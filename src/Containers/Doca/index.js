import React, { Component } from 'react'
import CardDoca from '../../Components/CardDoca'
import './index.css'

class Doca extends Component {
  
  renderDoca = doca => (
    <CardDoca key={doca.id} doca={doca} />
  )

  render() {
    const { docas } = this.props
    return (
      <div className='containerDoca'>
        <div className='containerDocaTitle'>Docas</div>
        {docas.map(this.renderDoca)}
      </div>
    )
  }
}
 


export default Doca