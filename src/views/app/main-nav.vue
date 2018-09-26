<template>
  <vue2-scrollbar>
    <el-aside id="mian-nav" width="auto">
      <div style="height:60px;line-height:60px;text-align:center;color:white;" @click="$emit('update:collapse',!collapse)">
        {{collapse?'点我':'占个坑LOGO点我'}}
      </div>
      <el-menu class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose" background-color="#2e3f4f" text-color="#fff" :collapse="collapse">
        <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">工作台</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>列表展示</span>
          </template>
          <el-menu-item index="/list/table">简单table列表</el-menu-item>
          <el-menu-item index="/list/table2">自定义table列表</el-menu-item>
          <el-menu-item index="/list/card">卡片列表</el-menu-item>
          <el-menu-item index="/article/list">文章列表</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>详情展示</span>
          </template>
          <el-menu-item index="/article/info/1">文章详情</el-menu-item>
          <el-menu-item index="/article/edit/0">文章添加</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>其他常用组件</span>
          </template>
          <el-menu-item index="1-3">文章编辑</el-menu-item>
          <el-menu-item index="/map/amap">高德地图</el-menu-item>
          <el-menu-item index="1-4-1">轮播</el-menu-item>
          <el-menu-item index="1-4-1">图标iconfont</el-menu-item>
          <el-menu-item index="1-4-1">自定义上传</el-menu-item>
          <el-menu-item index="1-4-1">拖拽排序</el-menu-item>
          <el-menu-item index="1-4-1">滚动条</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">部门树</span>
        </el-menu-item>
        <el-menu-item @click="loginout" index="xx">
          <i class="el-icon-d-arrow-left"></i>
          <span slot="title">退出先放这</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </vue2-scrollbar>
</template>
<script>
import vue2Scrollbar from 'vue2-scrollbar'
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vue2Scrollbar
  },
  data() {
    return {
      navs: [{ path: 'index', name: '工作台', icon: 'el-icon-menu', sort: 0, children: [] }]
    }
  },
  methods: {
    loginout() {
      this.$utils.setCookie('lgtoken', '')
      window.location.href = '/'
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {},
  mounted() {}
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
</style>
