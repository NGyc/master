import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { createI18n } from "vue-i18n"
import App from "./App.vue"
import mZhLocale from "./local/language/languageCN"

const messages = {
  zh: {
    msg: {
      ...mZhLocale,
    },
  },
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: "zh-CN",
  messages,
})
const app = createApp(App)
app.use(i18n)
app.use(ElementPlus, {
  locale: zhCn,
}).mount("#app")
