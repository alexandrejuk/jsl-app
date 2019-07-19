import React, { Component } from 'react'
import './index.css'
import { Logo } from '../../assets'


class Login extends Component {

  state = {
    login: {
      userName: null,
      password: null,
    }
  }

  handlerChangeFormLogin = (e) => {
    const { name, value } = e.target
    this.setState({
      login: {
        ...this.state.login,
        [name]: value
      }
    })
  }

  handleClick = () => {
    this.props.handleLogin(this.state.login)
  }

  render() {
    return (
      <div className='wrapper-login'>
        <div className='logo-company-login'>
          <img className='logo-company-login-img' src={Logo} alt='logo company' />
        </div>
        <div className='welcome-info'>
          <h1 className='welcome-info-title'>Bem Vindo</h1>
        </div>
        <div className='wrapperFormLogin'>
          <div className='formGroupLoginForm'>
            <label className='formGroupLoginLabel'>Usuário</label>
            <input 
              className='formGroupLoginInput' 
              type='text' 
              placeholder='usuário' 
              name='userName'
              onChange={this.handlerChangeFormLogin}
            />
          </div>
          <div className='formGroupLoginForm'>
            <label className='formGroupLoginLabel'>Senha</label>
            <input 
              className='formGroupLoginInput' 
              type='password' 
              placeholder='senha' 
              name='password'
              onChange={this.handlerChangeFormLogin}
            />
          </div>
          <div className='formGroupLoginForm'>
            <button 
              className='buttonFormLogin'
              onClick={this.handleClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
} 

export default Login