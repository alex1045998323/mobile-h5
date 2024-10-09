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
    count: 0
  },
  getters: {},
  // 同步
  mutations: {
    setCount(state, val) {
      state.count = val
    }
  },
  // 异步
  actions: {}
}
