// vuep 作用域有限制，内部require失败， 约定挂window[组件]上
window.DemoCode = require('../').default

export default `
<template>
  <pre v-html="output" />
</template>

<script>

  const input = 'hello world!'

  export default {
    data () {
      return {
        output: DemoCode(input)
      }
    }
  }
</script>
`
