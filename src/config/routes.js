// routes
import Index from '../pages/index/index'
import Code from '../pages/code/index'
import Travel from '../pages/travel/index'
import Cook from '../pages/cook/index'
import Cat from '../pages/cat/index'

const routes = [
  { exact: true, path: '/', component: Index },
  { path: '/code', component: Code },
  { path: '/travel', component: Travel },
  { path: '/cook', component: Cook },
  { path: '/cat', component: Cat }
]

export default routes