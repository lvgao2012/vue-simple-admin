<template>
  <div>
    <el-row :gutter="10">
      <el-col :lg="4" :md="6" sm="8" v-for="i in 20" :key="i">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom:10px">
          <img src="http://lorempixel.com/300/400/" style="width:100%" class="image">
          <div style="padding: 14px;">
            <span>华丽华丽华丽华丽</span>
            <div>
              <time class="time"> 2018-08-08</time>
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
    return {}
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="stylus">
</style>