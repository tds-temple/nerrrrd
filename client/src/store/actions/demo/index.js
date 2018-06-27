import { GET_DEMO } from './constants'

export const getDemo = () => dispatch => {
  return fetch('/api/demo')
    .then(res => {
      if(!res.ok) { throw res }  
      return res.json()
    })
    .then(demo => dispatch({type: GET_DEMO, payload: demo}))
    .catch(err => console.log(err))
}