// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 设计稿的根元素字体大小，通常是 16px
      unitPrecision: 5, // 转换后的精度
      propList: ['*'], // 可以转换的属性，支持 '*'、'!' 前缀等
      selectorBlackList: [], // 忽略的选择器，拥有这些类名的样式将不会被转换
      replace: true, // 是否替换原有单位
      mediaQuery: false, // 是否在媒体查询中转换
      minPixelValue: 0 // 最小像素值
    }
  }
}
