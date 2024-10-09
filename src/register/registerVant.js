/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : registerVant
 *｜CreateTime ：2024/9/26 17:49
 *｜Notes      : 注册 vant 组件
 *｜--------------------------------------------------------------------------
 */
import { Button, Notify } from 'vant'

const RegisterVant = (app) => {
  app.use(Button).use(Notify)
  return app
}

export default RegisterVant
