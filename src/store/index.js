/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : index
 *｜CreateTime ：2024/9/27 10:29
 *｜Notes      : pinia 状态管理器
 *｜--------------------------------------------------------------------------
 */

import { createStore } from 'vuex'

import global from './modules/global.js'
import user from './modules/user.js'

export default createStore({
  // 公共模板直接在这里展开就可以
  ...global,
  modules: {
    user
  }
})
