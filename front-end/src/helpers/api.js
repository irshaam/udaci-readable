import axios from 'axios'

//define token
let token = localStorage.token

//generate token if it does not exist
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

//set axios defaults
axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.headers.common['Authorization'] = token;

export const fetchCategories = () =>
   axios.get('/categories')
      .then((resp) => resp.data)