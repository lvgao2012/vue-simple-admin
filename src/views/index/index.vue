<template>
  <div>
    <div style="margin-bottom:20px">
      <el-row :gutter="15">
        <el-col :lg="4" :md="6" :sm="8" v-for="i in 6" :key="i">
          <el-card shadow="never">
            图标+文字+数字统计
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom:20px">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-card shadow="never" style="height:400px">
            图表
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="never" style="height:400px">
            图表
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom:20px">
      <el-row :gutter="15">
        <el-col :span="8">
          <el-card shadow="never" style="height:400px">
            列表
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" style="height:400px">
            列表
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" style="height:400px">
            日历
          </el-card>
        </el-col>
      </el-row>
    </div>
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
