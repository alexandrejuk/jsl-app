import React, { Component } from 'react'
import DocaContainer from '../../../Containers/Doca'
import DocaService from '../../../services/doca'
import NavBar from '../../../Components/NavBar'

class Doca extends Component {
  docaService = null
  state = {
    docas: [],
    docasAvailable: 0,
    docasOperation: 0,
  }
  
  componentDidMount() {
    this.docaService = new DocaService()
    this.handleDocas()
  }

  handleDocas = async() => {
    try {
      const { data: docas } = await this.docaService.docas()
      const docasAvailable = docas.filter(doca => doca.status === 'available').length
      const docasOperation = docas.filter(doca => doca.status === 'operation').length

      this.setState({ docas, docasOperation, docasAvailable })
      
    } catch (error) {
      console.log('error')
    }
  }
  render() { 
    const {
      docas,
      docasAvailable,
      docasOperation,
    } = this.state
    return (
      <>
        <NavBar docasAvailable={docasAvailable} docasOperation={docasOperation} />
        <DocaContainer docas={docas} />
      </>
    )
  }
}
 
export default Doca