import http from '@/libs/http.js'
const apis = {
  getInfo() {

  },
  getInfoB() {

  },
  getArticleInfo() {
    return http.get({
      url: 'article/info',
      data: {
        id: 1
      }
    })
  }
}
export default apis
