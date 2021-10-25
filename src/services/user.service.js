import axios from 'axios'
import authHeader from './data.service'

const API_URL = 'http://localhost:3001/consignment'

class ConsignmentService {
  getAllConsignments() {
    return axios.get(API_URL)
  }
}
