<template>
  <el-config-provider :locale="locale">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from "element-plus"
import { Options, Vue } from "vue-class-component"
import en from "element-plus/lib/locale/lang/zh-cn"
import HelloWorld from "./components/HelloWorld.vue"

@Options({
  components: {
    ElConfigProvider,
    HelloWorld,
  },
})

export default class App extends Vue {
  msg:number = 123

  locale = en

  created() {
    // console.log(this.msg)
  }

  get() {}

  getData():void {
    // console.log(this.msg)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
