import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/home"
import destinate from "../views/destinate"
import discover from "../views/discover"
import my from "../views/my"
import register from "../views/register"
import login from "../views/login"
import main from "../views/main"
Vue.use(VueRouter)
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
		// 映射路由
    {
      path:'/main',
      component:main,
  },
  {
      path: '/',
      redirect: '/main/home'
  },

  {
    path: '/main/register',
    component:register,
  },
  {
    path: '/main/login',
    component:login,
  },
    {
      path: '/main',
      component: main,
      children: [
          {
              path: 'home',
              component: home
          },
          {
            path:'destinate',
            component:destinate,
          },
          {
              path: 'discover',
              component: discover
          },
          {
              path: 'my',
              component:  my
          }
      ]
  }

],
})
// 前置守卫,判断哪个需要登录
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
	next()
	window.console.log("请先登录")
    //当页面需要登录的时候判断浏览器是否有sessionStorage
    if(window.sessionStorage.data){
		// 注意next()必须加
      next()
    }else{
    // alert('session为空，请先登录')
    //如果没有，让页面进入登录页
      next('/login')
    }
  }
  else{
    next()
  }
})
export default router
