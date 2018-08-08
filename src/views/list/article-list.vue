<template>
  <div>
    <div>
      <el-form size="small">
        <el-form-item label="类别：">
          <el-checkbox-group>
            <el-checkbox v-for="i in 15" :key="i">分类{{i}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="标签：">
          <el-checkbox-group>
            <el-checkbox v-for="i in 30" :key="i">标签{{i}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <el-form size="small" inline>
        <el-form-item label="时间：">
          <el-date-picker></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-date-picker></el-date-picker>
        </el-form-item>
        <el-form-item label="搜索：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row :gutter="15">
      <el-col :lg="12" :md="24" :sm="24" v-for="i in query.list" :key="i.id">
        <div :body-style="{ padding: '0px' }" style="margin-bottom:20px;overflow:hidden;clear:both;background:rgba(0,0,0,1)">
          <div class="article-img" style="width:150px;float:left;padding:20px 0px;">
            <img :src="i.cover" style="width:100%" class="image">
          </div>
          <div style="padding: 10px 20px;;height:135px;margin-left:150px;background:white;border:1px solid #ccc">
            <p style="font-size:16px;font-weight:bold;line-height:28px">{{i.title}}
              <el-dropdown style="float:right">
                <a style="padding:5px 10px;" class="el-dropdown-link">
                  ...
                </a>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>详情</el-dropdown-item>
                  <el-dropdown-item>编辑</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
            <div style="padding:5px 0px;color:#333;font-size:14px;line-height:18px;height:70px;overflow:hidden">
              <p>{{i.context}}</p>
            </div>
            <div style="font-size:14px;line-height:18px;padding:10px 0px">
              <p>发表于{{i.createTime}}
                <span style="float:right">阅:100 评:5</span>
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="text-align:right;padding-top:20px">
      <el-pagination background layout="prev, pager, next" :total="query.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {
        psize: 12,
        pdix: 1,
        list: [],
        total: 0
      }
    }
  },
  methods: {
    getList() {
      this.$api.list.getListArticle().then((res) => {
        this.query.list = res.data.list
        this.query.total = res.data.total
      })
    }
  },
  computed: {},
  mounted() {
    this.getList()
  }
}
</script>
<style lang="stylus">
</style>