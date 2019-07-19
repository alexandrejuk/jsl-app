import React, { Component } from 'react'
import './index.css'
import { Logo } from '../../../assets'


class SearchTicket extends Component {

  state = {
    documentId: null,
  }

  handlerChangeFormSearchTicket = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    
  }

  handleClick = () => {
    this.props.handleSearchTicket(this.state)
  }

  render() {
    return (
      <div className='wrapper-SearchTicket'>
        <div className='logo-company-SearchTicket'>
          <img className='logo-company-SearchTicket-img' src={Logo} alt='logo company' />
        </div>
        <div className='welcome-info'>
          <h1 className='welcome-info-title'>Bem Vindo</h1>
        </div>
        <div className='wrapperFormSearchTicket'>
          <div className='formGroupSearchTicketForm'>
            <label className='formGroupSearchTicketLabel'>RG</label>
            <input 
              className='formGroupSearchTicketInput' 
              type='text' 
              placeholder='insira o rg' 
              name='documentId'
              onChange={this.handlerChangeFormSearchTicket}
            />
          </div>
          <div className='formGroupSearchTicketForm'>
            <button 
              className='buttonFormSearchTicket'
              onClick={this.handleClick}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    )
  }
} 

export default SearchTicket