<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import HelloWorld from "./components/HelloWorld.vue"

@Options({
  components: {
    HelloWorld,
  },
})

export default class App extends Vue {
  msg:number = 123

  created() {
    // console.log(this.msg)
  }

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
