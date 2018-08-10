<template>
  <div id="app">
    <div v-loading.fullscreen.lock="true" v-if="loading"></div>
    <template v-if="login==1">
      <div id="main-nav-box" :class="{'collapse-nav':collapse}">
        <main-nav :collapse.sync="collapse"></main-nav>
      </div>
      <div id="main-content-box" :class="{'collapse-content':collapse}">
        <main-content></main-content>
      </div>
    </template>
    <template v-if="login==-1">
      <login @loginSucc="loginSucc"></login>
    </template>
  </div>
</template>

<script>
import login from '@/views/app/login.vue'
import mainNav from '@/views/app/main-nav.vue'
import mainContent from '@/views/app/main-content.vue'
export default {
  name: 'App',
  data() {
    return {
      collapse: false,
      loading: true,
      login: 0
    }
  },
  components: {
    login,
    mainNav,
    mainContent
  },
  methods: {
    loginout() {
      this.$utils.setCookie('lgtoken', '')
      window.location.href = '/'
    },
    checkLogin() {
      let key = this.$utils.getkey()
      if (!key) {
        //无token
        this.$toaster.error('请登录')
        this.loading = false
        this.login = -1
        return
      }
      this.$api.user.checkLogin().then((res) => {
        setTimeout(() => {
          //假装两秒延迟
          this.loading = false
          if (!res.data.login) {
            this.loginout()
            //有token  失效了
            this.$toaster.error('请登录')
            return
          }
          this.login = 1
        }, 2000)
      })
    },
    loginSucc() {
      this.login = 1
      //获取用户信息、权限、配置、公共接口
      // this.getUserInfo()
      // this.getUserRoles()
    }
  },
  beforeMount() {
    this.checkLogin()
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
