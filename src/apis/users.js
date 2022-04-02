import axios from 'axios'

const baseURL = 'https://mocki.io/v1'
const apiHelper = axios.create({
  baseURL,
})

export default {
  getUsers() {
    return apiHelper.get('/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  },
}
