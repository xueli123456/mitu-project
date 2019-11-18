import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../view/shou"
import mudi from "../view/mudi"
import faxian from "../view/faxian"
import qianzhen from "../view/qianzhen"
import my from "../view/my"
import login from "../view/login"

Vue.use(VueRouter)
let router = new VueRouter({
    //路由map集合 path : views component
    routes:[
		// 映射路由
    {path:"/",redirect:"/Home"}, // 设置首页
    {path:"/Home",component:Home},
	// 分类
	{path:"/mudi",component:mudi},
	// 购物车
	{path:"/faxian",component:faxian},
    { name:"qianzhen",path:"/qianzhen",component:qianzhen},
	// 我的
	{path:"/my",component:my},
	{path:"/login",component:login}
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
