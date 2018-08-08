<template>
  <div>
    <el-row :gutter="10">
      <el-col :lg="4" :md="6" :sm="8" v-for="i in query.list" :key="i.id">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:10px">
          <img :src="i.headurl" style="width:100%" class="image">
          <div style="padding: 14px;">
            <span>{{i.name}}</span>
            <div>
              <time class="time">{{i.birthday}}</time>
              <el-button type="text" class="button">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: {
        psize: 10,
        pdix: 1,
        list: [],
        total: 0
      }
    }
  },
  methods: {
    getList() {
      this.$api.list.getListCard().then((res) => {
        this.query.list = res.data.list
        this.query.total = res.data.total
      })

      this.query.total = 100
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