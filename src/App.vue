<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <div id="main-nav-box" :class="{'collapse-nav':collapse}">
      <main-nav :collapse.sync="collapse"></main-nav>
    </div>
    <!-- <el-header>Header</el-header> -->
    <div id="main-content-box" :class="{'collapse-content':collapse}">
      <main-content></main-content>
    </div>

  </div>
</template>

<script>
import mainNav from '@/views/app/main-nav.vue'
import mainContent from '@/views/app/main-content.vue'
export default {
  name: 'App',
  data() {
    return { collapse: false }
  },
  components: {
    mainNav,
    mainContent
  }
}
</script>

<style lang="stylus">
#app
  min-height 100%
  #main-nav-box
    position fixed
    top 0px
    bottom 0px
    left 0px
    background #2e3f4f
    width 220px
    transition width 0.28s
    &.collapse-nav
      width 65px
    .el-menu
      border-right 0px
  #main-content-box
    margin-left 220px
    transition margin-left 0.28s
    &.collapse-content
      margin-left 80px
</style>
