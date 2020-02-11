//  using the jsonserver folder
//  using json-server and ngrok as dummy api we
//  can persist data to
import axios from 'axios'

export default axios.create({
  // from ngrok, updates every eight hours
  baseURL: 'http://23c4d8c5.ngrok.io'
})
