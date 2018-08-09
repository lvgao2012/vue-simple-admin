<template>
  <div class="page-main">
    <div class="app-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">这里</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>后续</el-breadcrumb-item>
        <el-breadcrumb-item>优化</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
.page-main
  .app-breadcrumb
    padding 20px
    border-bottom 1px solid #e6e6e6
  .page-main-content
    padding 20px
</style>
