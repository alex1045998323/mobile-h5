<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>
    <van-button @click="handleChangeLang">{{ $t('message') }}</van-button>
    <van-button @click="handleToHome">{{ $t('toHome') }}</van-button>
    {{ count }}
    <router-view></router-view>
    <van-cell-group>
      <van-cell>
        <template #title>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </template>
      </van-cell>
      <van-cell class="goods-express">
        <template #title>
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template #title>
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" @click="sorry">客服</van-action-bar-icon>
      <van-action-bar-icon icon="cart-o" @click="onClickCart">购物车</van-action-bar-icon>
      <van-action-bar-button type="warning" @click="sorry">加入购物车</van-action-bar-button>
      <van-action-bar-button type="danger" @click="sorry">立即购买</van-action-bar-button>
    </van-action-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {
        title: '美国伽力果213（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },

    onClickCart() {
      this.$router.push('cart')
    },

    sorry() {
      showToast('暂无后续逻辑~')
    },
    handleChangeLang() {
      // this.$router.push("/")
      this.$store.commit('setCount', 6)
      this.$store.commit('setUserCount', 888)
      this.$changeLang('en-US', this)
    },
    handleToHome() {
      this.$changeLang('zh-CN', this)
      this.$store.commit('setCount', 4)
      this.$store.commit('setUserCount', 777)
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
