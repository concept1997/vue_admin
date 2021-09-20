import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () =>
    import ( /* webpackChunkName: "login_home_welome" */ '../components/login.vue')
const Home = () =>
    import ( /* webpackChunkName: "login_home_welome" */ '../components/home.vue')
const Welcome = () =>
    import ( /* webpackChunkName: "login_home_welome" */ '../components/welcome.vue')

const Users = () =>
    import ( /* webpackChunkName: "Users_Rights_Roles" */ '../components/user/users.vue')
const Rights = () =>
    import ( /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/rights.vue')
const Roles = () =>
    import ( /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/roles.vue')

const Cate = () =>
    import ( /* webpackChunkName: "Cate_Params" */ '../components/goods/cate.vue')
const Params = () =>
    import ( /* webpackChunkName: "Cate_Params" */ '../components/goods/params.vue')

const GoodsList = () =>
    import ( /* webpackChunkName: "GoodsList_Add" */ '../components/goods/list.vue')
const Add = () =>
    import ( /* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add.vue')

const Order = () =>
    import ( /* webpackChunkName: "Order_Report" */ '../components/order/order.vue')
const Report = () =>
    import ( /* webpackChunkName: "Order_Report" */ '../components/report/report.vue')
    // import Login from '../components/login.vue'
    // import Home from '../components/home.vue'
    // import Welcome from '../components/welcome.vue'
    // import Users from '../components/user/users.vue'
    // import Rights from '../components/power/rights.vue'
    // import Roles from '../components/power/roles.vue'
    // import Cate from '../components/goods/cate.vue'
    // import Params from '../components/goods/params.vue'
    // import GoodsList from '../components/goods/list.vue'
    // import Add from '../components/goods/Add.vue'
    // import Order from '../components/order/order.vue'
    // import Report from '../components/report/report.vue'

Vue.use(VueRouter)



const router = new VueRouter({
        routes: [
            { path: '/', redirect: '/login' },
            { path: '/login', component: Login },
            {
                path: '/home',
                component: Home,
                redirect: '/welcome',
                children: [{ path: '/welcome', component: Welcome },
                    { path: '/users', component: Users },
                    { path: '/rights', component: Rights },
                    { path: '/roles', component: Roles },
                    { path: '/categories', component: Cate },
                    { path: '/params', component: Params },
                    { path: '/goods', component: GoodsList },
                    { path: '/goods/add', component: Add },
                    { path: '/orders', component: Order },
                    { path: '/reports', component: Report },
                ]


            }
        ]
    })
    //路由导航首位
router.beforeEach((to, from, next) => {

    if (to.path === '/login') return next();
    const tokenStr = window.sessionStorage.getItem('token');
    if (!tokenStr) return next('/login');
    next()

})

export default router