import { createI18n } from "vue-i18n"
import { createApp } from "vue"
import mZhLocale from "./local/language/languageCN"
import App from "./App.vue"

const app = createApp(App)

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
app.use(i18n)
