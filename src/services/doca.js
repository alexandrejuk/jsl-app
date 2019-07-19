import request from './request'
const url = '/docas'
class DocaService {
 
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  docas() {
    return this.axios.get(url)
  }
}

export default DocaService