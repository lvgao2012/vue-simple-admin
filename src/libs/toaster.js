import Vue from 'vue'
export default {
  message: function (t, m, d, data, cb) {
    var options = {
      customClass: 'toaster toaster-success',
      title: t || '成功',
      message: m || '操作成功',
      duration: d || 1500,
      type: 'success',
      onClick: cb,
    }
    Vue.prototype.$message.success(options)
  },
  error: function (t, m, d) {
    var options = {
      title: t || '错误',
      message: `${t}  ${m||''}` || '错误消息',
      duration: d || 1500,
      offset: 120,
      type: 'error',
      showClose: true,
    }
    Vue.prototype.$message.error(options)
  },
  info: function (t, m, d) {
    var options = {
      title: t || '操作提示',
      message: m || '提示消息',
      duration: d || 1500,
      type: 'info',
      showClose: true,
    }
    Vue.prototype.$message.info(options)
  },
  warn: function (t, m, d) {
    var options = {
      // customClass: 'toaster toaster-warn',
      title: t || '警告',
      message: t || '警告消息',
      duration: d || 1500,
      type: 'warning',
      showClose: true,
    }
    Vue.prototype.$message.warning(options)
  },
  ok: function (t, m, d) {
    var options = {
      title: t || '成功',
      message: t || '操作成功',
      duration: d || 1500,
      type: 'success',
      showClose: true,
    }
    Vue.prototype.$message.success(options)
  }
}
