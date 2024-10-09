/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : registerLocale
 *｜CreateTime ：2024/9/26 18:13
 *｜Notes      : 类说明
 *｜--------------------------------------------------------------------------
 */
import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US'
import zhCn from 'vant/es/locale/lang/zh-CN'

const vantLocal = {
  'zh-CN': zhCn,
  'en-US': enUS
}

const messages = {
  'zh-CN': {
    message: '切换多语言',
    toHome: '跳转到Home'
  },
  'en-US': {
    message: 'change lang',
    toHome: 'to Home index'
  }
}

const registerLocale = (app) => {
  const i18n = createI18n({
    locale: 'zh-CN',
    messages: messages
  })
  app.use(i18n)

  // 注册一个 全局的语言切换方法

  // 注册全局方法切换多语言
  app.config.globalProperties.$changeLang = function (local_val, vm) {
    console.log('这是一个全局方法$changeLang', local_val)
    vm.$i18n.locale = local_val
    // 切换 vant 多语言
    Locale.use(local_val, vantLocal[local_val])
  }
}

export default registerLocale
