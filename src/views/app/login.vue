<template>
  <div id="login-page">
    <div class="login-main">
      <div class="login-title">
        随便登录的管理系统
      </div>
      <div class="login-wrap">
        <el-form :span="10" ref="login" :model="login">
          <div>
            <template v-if='state=="login"'>
              <el-form-item prop="name">
                <el-input placeholder="请输入手机号" v-model="login.name"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="login.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox>记住账号</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('login')">登录</el-button>
              </el-form-item>
              <el-form-item>
                没有账号？
                <el-button type="text" @click="state='reg'">点击注册</el-button>
              </el-form-item>
            </template>
            <template v-if='state=="reg"'>
              <el-form-item prop="name">
                <el-input placeholder="请输入手机号" v-model="login.name"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="请输入验证码" v-model="login.telcode" class="input-with-select">
                  <el-button slot="append" @click="getTelCode" :disabled="timeout>0">{{timeout==0?'获取验证码':`${timeout}后重试`}}</el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="login.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="regForm">注册</el-button>
              </el-form-item>
              <el-form-item>
                已有账号？
                <el-button type="text" @click="state='login'">点击登陆</el-button>
              </el-form-item>
            </template>
          </div>
        </el-form>
      </div>
    </div>
    <div class="login-info">
      <p>描述：</p>
      <p>app.vue存放登录状态，通过状态显示登录组件或业务组件</p>
      <p>页面刷新执行登录状态校验、处理加载、登录、登出逻辑</p>
      <p>登录页可登录、注册等等</p>
      <p>登录页登录成功后emit父组件事件，执行登录后的信息</p>
    </div>
  </div>
</template>
<script>
// import Bus from '@/services/bus.js'
export default {
  name: 'Login',
  data() {
    return {
      state: 'login',
      timeout: 0,
      login: {
        name: '',
        telcode: '',
        password: ''
      }
    }
  },
  mounted() {},
  methods: {
    submitForm: function(data) {
      let login = this.login
      if (!this.$utils.telphone(login.name)) {
        this.$toaster.error('请填写手机号')
        return
      }
      if (!this.$utils.isString(login.password)) {
        this.$toaster.error('请填写密码')
        return
      }
      this.$api.user.login(this.login.name, this.login.password).then((res) => {
        let token = res.data.token
        this.$utils.setCookie('lgtoken', token)
        this.$toaster.ok('登录成功')
        this.$emit('loginSucc')
      })
    },
    regForm() {
      let login = this.login
      if (!this.$utils.telphone(login.name)) {
        this.$toaster.error('请填写手机号')
        return
      }
      if (!this.$utils.isString(login.telcode)) {
        this.$toaster.error('请填写验证码')
        return
      }
      if (!this.$utils.isString(login.password)) {
        this.$toaster.error('请填写密码')
        return
      }
      this.$api.user.register(this.login.name, this.login.telcode, this.login.password).then((res) => {
        this.$toaster.ok('注册成功')
        this.state = 'login'
      })
    },
    getTelCode() {
      let login = this.login
      if (this.timeout > 0) {
        this.$toaster.error('请稍后再试')
        return
      }
      if (!this.$utils.telphone(login.name)) {
        this.$toaster.error('请填写手机号')
        return
      }
      this.$api.user.getTelCode(this.login.name).then((res) => {
        this.$toaster.ok('验证码已发送，请注意查收')
        this.timeout = 60
        let timer = setInterval(() => {
          this.timeout--
          if (this.timeout == 0) {
            clearInterval(timer)
          }
        }, 1000)
      })
    }
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
#login-page
  position absolute
  width 100%
  height 100%
  background-color #2e3f4f
  background-position center center
  .login-main
    position absolute
    top 25%
    left 50%
    transform translateX(-50%)
    width 340px
    overflow hidden
    .login-title
      font-size 24px
      font-weight bold
      color t-white
      padding 20px
      text-align center
      opacity 0.7
    .login-wrap
      border-radius 5px
      background t-white
      .el-form
        padding 60px 40px 20px 40px
      .el-form-item
        margin-bottom 10px
        .el-button--primary
          width 100%
  .login-info
    color t-white
    opacity 0.7
    line-height 20px
    position absolute
    left 20px
    top 20px
</style>