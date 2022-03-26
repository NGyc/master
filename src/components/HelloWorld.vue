<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- {{ $t('默认按钮') }} -->
    <el-button></el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
// import "element-plus/es/components/button/style/css"
import { ElButton } from "element-plus"

@Options({
  components: {
    ElButton,
  },
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
