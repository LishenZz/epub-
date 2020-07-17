import Vue from 'vue'
import VueRouter from 'vue-router'


const EpubBook = () => import ('../view/EpubBook')
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
      path:'/ebook',
      component:EpubBook
  }
  
]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
