<template>
  <div class="page-content">
    <div class="">
      <el-row :gutter="20">
        <el-col :lg="16" :md="12" :sm="24" style="text-align:center">
          <div class="article-edit">
            <el-form label-position="top" size="small">
              <el-form-item>
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">请选择图片封面
                    <em>点击上传</em>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="文章标题：">
                <el-input v-model="info.title" placeholder="文章标题"></el-input>
              </el-form-item>
              <el-form-item label="副标题：">
                <el-input v-model="info.subtitle" type="textarea" placeholder="副标题"></el-input>
              </el-form-item>
              <el-form-item label="文章类别：">
                <el-radio-group>
                  <el-radio v-for="i in 8" :key="i">分类{{i}}</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="作者：">
                <el-input v-model="info.author"></el-input>
              </el-form-item>
              <el-form-item label="文章内容">
                <quill-editor v-model="info.content">
                </quill-editor>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :lg="8" :md="12" :sm="24" style="text-align:center">
          <div class="iphone-x">

            <div class="article-phone-info">
              <vue2-scrollbar style="height:100%">
                <div>
                  <div class="cover" :style="{backgroundImage:`url('${info.cover}')`}">
                  </div>
                  <div class="title">{{info.title}}</div>
                  <div class="author">
                    作者：{{info.author}}
                  </div>
                  <div class="sub-title">
                    {{info.subtitle}}
                  </div>
                  <div class="content" v-html="info.content">
                  </div>
                </div>
              </vue2-scrollbar>
            </div>

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import vue2Scrollbar from 'vue2-scrollbar'
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
  components: {
    quillEditor,
    vue2Scrollbar
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
@import "https://cdn.quilljs.com/1.3.6/quill.snow.css"
.page-content
  .article-edit
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
    .ql-editor
      strong
        font-weight bold
      p
        padding 8px 0px
        img
          max-width 100%
  .iphone-x
    position fixed
    top 100px
    right 50px
    background-image url("../../../static/image/iphonex.png")
    width 360px
    background-repeat no-repeat
    height 750px
    box-sizing border-box
    padding 43px 20px 0px 24px
    margin 0px auto
    .article-phone-info
      width 100%
      height 600px
      text-align left
      margin 20px auto
      overflow-y hidden
      font-size f-md
      .cover
        height 200px
        background-size cover
        background-position center
      .title
        text-align center
        font-size 18px
        padding 10px
      .author
        padding 5px
        text-align center
      .sub-title
        padding 5px
        line-height 20px
        color #aaa
      .content
        padding 5px
        line-height 20px
        strong
          font-weight bold
        p
          padding 8px 0px
          img
            max-width 100%
</style>