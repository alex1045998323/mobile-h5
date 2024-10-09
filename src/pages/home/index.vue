/** *｜-------------------------------------------------------------------------- *｜Author :
1045998323@qq.com *｜Class : index *｜CreateTime ：2024/9/27 09:22 *｜Notes : 首页
*｜-------------------------------------------------------------------------- */
<template>
  <div className="home">
    <span class="home-box">我是home</span>
    {{ count }}
  </div>
</template>

<script>
import { request } from '@/api/request'
export default {
  data() {
    return {}
  },
  created() {
    request.post('/', {}).then((res) => {
      alert(55)
    })
  },
  computed: {
    count() {
      return this.$store.state.user.userCount
    }
  }
}
</script>

<style lang="scss">
.home {
  //background-color: red;
  .home-box {
    color: blue;
  }
}
</style>
