<template lang="pug">
div.app
	sfui-doc(
		:config="config")
		router-view
</template>

<script>
const docConfig = require(`@PWD/docs/doc.config`)
document.title = docConfig.header.logo.title
export default {
  computed: {
    config() {
      return docConfig;
    }
  }
};
</script>

<style >
@import url('../reset.scss');

.sfui-doc .sfui-doc-nav__group {
  font-size: 16px;
  color: #333;
}
.sfui-doc .sfui-doc-nav__subitem {
  margin-left: 20px;
  font-size: 14px;
  color: #999;
}

</style>
