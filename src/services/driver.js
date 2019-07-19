import axios from 'axios'
const url = 'https://backend-jsl-cross.herokuapp.com:443/driver-ticket'

class DriverTicketService {
  getIdDriverTicket(value) {
    return axios.post(url, value)
  }
  geticket(id) {
    return axios.get(`${url}/${id}`)
  }
}

export default DriverTicketService