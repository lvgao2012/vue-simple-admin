<template>
  <div>

    <el-form size="small" inline>
      <el-form-item label="请选择">
        <el-select v-model="query.type"></el-select>
      </el-form-item>
      <el-form-item label="请选择">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="请选择">
        <el-date-picker></el-date-picker>
      </el-form-item>
      <el-form-item label="请选择">
        <el-date-picker></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button>筛选</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table :data="query.list" :border="true" style="width: 100%">
        <el-table-column align="center" label="头像" width="80">
          <template scope="scope">
            <div style="line-height:1px">
              <img style="width:35px;border-radius:100px;display:inline-block" :src="scope.row.headurl">
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="姓名" prop="name" width="120">
        </el-table-column>
        <el-table-column align="center" label="生日" width="250">
          <template scope="scope">
            <el-date-picker v-model="scope.row.birthday" size="mini"></el-date-picker>
            <!-- {{scope.row.date}} -->
          </template>
        </el-table-column>
        <el-table-column label="个人标签" width="180">
          <template scope="scope">
            <el-tag size="small" v-for="i in scope.row.name" :key="i">{{i}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="家庭住址">
          <template scope="scope">
            {{scope.row.address}}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="danger" size="mini">编辑</el-button>
            <el-button type="primary" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
        type: 0,
        psize: 10,
        pdix: 1,
        list: [],
        total: 0
      }
    }
  },
  methods: {
    getList() {
      this.$api.list.getList().then((res) => {
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