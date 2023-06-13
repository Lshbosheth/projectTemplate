<template>
  <div>demo <el-button type="primary">主要按钮</el-button></div>
</template>

<script>
import { demo } from '@/api/demo'
export default {
  data() {
    return {
      routePath: ' ',
      originPath: ' 123'
    }
  },
  created() {
    demo.getList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 16px;
}

.btns {
  button {
    margin-right: 16px;
  }
}
</style>
