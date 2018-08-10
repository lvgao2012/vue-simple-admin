export default {
  isString: function (str) {
    if (typeof str !== 'string') return false
    if (str.trim().length < 1) return false
    return true
  },
  isInt: function (num) {
    if (typeof num !== 'number') return false
    return /^[0-9]+$/.test(num)
  },
  telphone: function (num) {
    return /^((\+?[0-9]{1,4})|(\(\+86\)))?(1[0-9])\d{9}$/.test(num)
  },
  isEmail: function (str) {
    if (!this.isString(str)) return false
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str)
  },
  maxLength: function (str, len = 140) {
    if (!this.isString(str)) return false
    if (str.length >= ~~len) return false
    return true
  },
  minLength: function (str, len = 1) {
    if (!this.isString(str)) return false
    if (str.length < ~~len) return false
    return true
  },
  isMoney: function (num) {
    if (!num) return false
    return /^[0-9]+(.[0-9]{1,2})?$/.test(num)
  },
  isZeroOrNum: function (num) {
    if (!num) return false
    return /^(0|[1-9][0-9]*)$/.test(num)
  },
  isFloatNum: function (num) {
    if (!num) return false
    return /^(-?\d+)(\.\d+)?$/.test(num)
  },
  isID: function (num) {
    if (!num) return false
    return /^\d{15}|\d{18}$/.test(num)
  },
  isAccount: function (account) {
    if (!account) return false
    return /^[a-zA-Z][a-zA-Z0-9_]{5,13}$/.test(account)
  },
  isName: function (str) {
    if (!str) return false
    return /^[\u4e00-\u9fa5]{0,}$/.test(str)
  },
  setCookie(name, value, expireHours) {
    var cookieString = name + '=' + escape(value) + '; path=/'
    //判断是否设置过期时间
    if (expireHours > 0) {
      var date = new Date()
      date.setTime(date.getTime + expireHours * 3600 * 1000)
      cookieString = cookieString + '; expire=' + date.toGMTString()
    }
    document.cookie = cookieString
  },
  getCookie(name) {
    var strcookie = document.cookie
    var arrcookie = strcookie.split('; ')
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split('=')
      if (arr[0] == name) {
        return unescape(arr[1])
      }
    }
    return ''
  },
  delCookie() {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      var eqPos = cookie.indexOf('=')
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  },
  getuid() {
    return this.getCookie('lguid')
  },
  getkey() {
    return this.getCookie('lgtoken')
  },
}
