import User from './components/user/User'
import Home from './components/Home'
export const routes = [
// if it is domain ' ' then home is used
  {path: '', component: Home},
  {path: '/user', component: User}
]
