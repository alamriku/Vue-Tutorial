// export const value = state => {
//   return state.value
// }
import * as types from './type'
export default {
  [types.VALUE]: (state) => {
    return state.value
  }
}
