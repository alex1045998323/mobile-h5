/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : global.js
 *｜CreateTime ：2024/9/27 13:05
 *｜Notes      : 类说明
 *｜--------------------------------------------------------------------------
 */
export default {
  state: {
    userCount: 0
  },
  getters: {},
  // 同步
  mutations: {
    setUserCount(state, val) {
      state.userCount = val
    }
  },
  // 异步
  actions: {}
}
