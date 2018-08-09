<template>
  <div class="page-content">
    <div class="">
      <el-row :gutter="20">
        <el-col :lg="16" :md="12" :sm="24" style="text-align:center">
          <div class="article-info">
            <div class="cover" :style="{background:`url('${info.cover}')`}">
            </div>
            <div class="title">{{info.title}}</div>
            <div class="author">
              类别：{{inf.type}} 发布时间：{{info.date}} 作者：{{info.author}}
            </div>
            <div class="sub-title">
              {{info.subtitle}}
            </div>
            <div class="content" v-html="info.content">
            </div>
          </div>
        </el-col>
        <el-col :lg="8" :md="12" :sm="24">
          <div>发布人</div>
          <div>评论框</div>
          <div>评论列表</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        cover: '',
        title: '',
        author: '',
        date: '',
        subtitle: '',
        content: ''
      }
    }
  },
  methods: {
    getInfo() {
      this.$api.info.getArticleInfo().then((res) => {
        this.info = res.data
      })
    }
  },
  computed: {},
  mounted() {
    this.getInfo()
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
.page-content
  .article-info
    max-width 800px
    text-align left
    margin 20px auto
    font-size f-md
    .cover
      height 200px
      background-size cover
      background-position center
    .title
      text-align center
      font-size 24px
      padding 20px
    .author
      padding 10px
      text-align center
    .sub-title
      padding 10px
      color #aaa
    .content
      padding 10px
      line-height 20px
      strong
        font-weight bold
      p
        padding 8px 0px
        img
          max-width 100%
</style>