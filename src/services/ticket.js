import request from './request'
const url = '/tickets'

class TicketService {
 
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  updateTicket(values) {
    return this.axios.put(url, values)
  }
}

export default TicketService