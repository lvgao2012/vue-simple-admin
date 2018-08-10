import http from '@/libs/http.js'
const apis = {
  getTelCode() {
    return http.get({
      url: 'user/getcode',
    })
  },
  register(tel, pwd, code) {
    return http.post({
      url: 'user/register',
      data: {
        tel: tel,
        pwd: pwd,
        code: code
      }
    })
  },
  login(tel, pwd) {
    return http.post({
      url: 'user/login',
      data: {
        tel: tel,
        pwd: pwd,
      }
    })
  },
  getUserInfo() {
    return http.get({
      url: 'user/info',
    })
  },
  checkLogin() {
    return http.get({
      url: 'user/checklogin',
    })
  },
}
export default apis
