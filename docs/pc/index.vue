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

.sfui-doc-nav__group {
  font-size: 16px !important;
  color: #333 !important;
}
.sfui-doc-nav__subitem {
  margin-left: 20px !important;
  font-size: 14px !important;
  color: #999 !important;
}

.fe-png {
  max-width: calc(100vw - 280px);
  overflow: scroll;
}
.fe-png img {
  width: 100%;
  height: 100%;
}

</style>
