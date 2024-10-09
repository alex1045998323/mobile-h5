import { createApp } from 'vue'
const app = createApp(App)
// 注册 vuex
import registerStore from '@/register/registerStore'
registerStore(app)
// 引入组件样式
import 'vant/lib/index.css'
import 'vant/es/notify/style'
// 注册组件
import RegisterVant from '@/register/registerVant'
RegisterVant(app)

// 注册多语言
import registerLocale from '@/register/registerLocale'
registerLocale(app)

// 注册路由
import registerRouter from '@/register/registerRouter'
registerRouter(app)

import App from '@/App.vue'

// Lazyload 指令需要单独进行注册
// app.use(vant.Lazyload);

app.mount('#app')
