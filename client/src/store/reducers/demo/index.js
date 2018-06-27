import { GET_DEMO } from '../../actions/demo/constants'

const demoReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_DEMO:
        return payload
      default:
        return state
    }
}

export default demoReducer