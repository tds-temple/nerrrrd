import {GET_CUSTOMERS} from './constants'

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => {
      if(!res.ok) { throw res }  
      return res.json()
    })
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
    .catch(err => console.log(err))
}