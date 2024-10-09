/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : registerRouter
 *｜CreateTime ：2024/9/27 09:17
 *｜Notes      : 路由
 *｜--------------------------------------------------------------------------
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import routeList from '@/router/route'

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(),
  routes: routeList
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return true
})

router.afterEach((to, from, next) => {
  // sendToAnalytics(to.fullPath)
  // alert(33333333)
  // next()
})

export default router
