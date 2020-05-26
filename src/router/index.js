/**
 * 插件引入
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * 路由引入
 */
import Home from '../views/Home'

/**
 * 注册路由
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})





/**
 * 全局添加
 * push replace 回调参数
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}
