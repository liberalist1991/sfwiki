<template lang="pug">
div.layout-md
	slot
	template(v-if="!!code")
		vuep(:template="code" :options="{ theme: 'neo' }")
	template(v-if="!!source")
		div.source-preview-btn(@click="showSource=!showSource") {{!!showSource ? '- 收起源码': '+ 查看源码'}}
		sfui-doc-code(:code="source" :saveAs="saveAs" v-show="showSource")
</template>

<script>
/*
 ** doc文档模版 处理展示源码 + 代码编辑
 */

export default {
  data() {
    return {
      showSource: this.expand
    }
  },
  props: {
    code: String, // 传值则显示对应vuep代码编辑框
    source: String, // 传值则显示对应源码
	saveAs: String, // 导出的文件名
	expand: {
		type: Boolean,
		default: false
	}
  }
};
</script>

<style lang="stylus">
.layout-md .vuep {
  border: 1px solid #e8e8e8;
}

.layout-md .source-preview-btn {
  margin: 20px 0;
  display: block;
  height: 40px;
  width: 100px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #d8d8d8;
  cursor: pointer;
}
</style>
