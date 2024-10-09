/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : registerStore
 *｜CreateTime ：2024/9/27 11:08
 *｜Notes      : 类说明
 *｜--------------------------------------------------------------------------
 */
// import { createPinia } from 'pinia'
import store from '@/store'
const RegisterStore = (app) => {
  app.use(store)
}

export default RegisterStore
