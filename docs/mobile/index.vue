<template lang="pug">
  div
      sfui-doc-nav-mobile(:config="config.nav")
        div.title {{config.header.logo.title}}
      div.sfui-doc-container
          router-view
</template>

<script>
const config = require(`@PWD/docs/doc.config`)
document.title = config.header.logo.title

export default {
    data() {
      return {
        config
      };
    },
};
</script>

<style>
@import url('../reset.scss');
html,
body {
    height: auto !important;
    overflow: scroll !important;
    -webkit-overflow-scrolling: touch;
}
.sfui-doc-container {
    margin-top: 45px;
}
.sfui-doc-nav {
    box-sizing: border-box;
}

.menu-header[data-v-4c965456] {
    border-bottom: 1px solid #d8d8d854!important;
}

.fe-png {
  max-width: 100%;
  overflow: scroll;
}
.fe-png img {
  width: 100%;
  height: 100%;
}

</style>

<style scoped>
    .title {
        font-size: 18px;
        font-weight: bold;
    }
</style>
