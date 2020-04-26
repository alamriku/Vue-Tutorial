
import Home from './components/Home'
import Header from './components/Header'

const User = resolve => {
  require.ensure(['./components/user/User'], () => {
    resolve(require('./components/user/User'))
  }, 'user')
}

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail'], () => {
    resolve(require('./components/user/UserDetail'))
  }, 'user')
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart'], () => {
    resolve(require('./components/user/UserStart'))
  }, 'user')
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit'], () => {
    resolve(require('./components/user/UserEdit'))
  }, 'user')
}
export const routes = [
// if it is domain ' ' then home is used
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {path: '', component: UserStart},
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside route setup')
          next()
        }},
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]},
  {
    path: '/redirect-me',
    redirect: { name: 'home' }
  },
  {
    path: '*', redirect: '/'
  }
]
