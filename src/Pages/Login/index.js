import React, { Component } from 'react'
import LoginContainer from '../../Containers/Login'
import AuthService from '../../services/auth'

class Login extends Component {
  authService = null

  componentDidMount() {
    this.authService = new AuthService()
  }
  
  setTokenAndCompanyId = (token, companyId) => {
    localStorage.setItem('companyId', companyId)
    localStorage.setItem('token', token)
    window.location.href = '/#/logged/docas'
  }

  login = async (values) => {
    try {
      const { data } = await this.authService.authentication(values)
      this.setTokenAndCompanyId(data.token, data.user.companyId)
    } catch (error) {
    }
  }

  render() {
    return (
      <LoginContainer 
        handleLogin={this.login}
      />
    )
  }
} 
 
export default Login