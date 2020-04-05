<template lang="pug">
    layoutMd(:code="code" :source='source' :saveAs="saveAs")
      md
</template>

<script>
import code from './code'
import source from '!raw-loader!../'
import md from './desc.md'

export default {
  components: {
      md
  },

  created() {
      this.saveAs = 'DemoCode.js'
      this.code = code;
      this.source = source;
  }
};
</script>
