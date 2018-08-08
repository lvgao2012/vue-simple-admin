<template>
  <div>

    <el-form size="mini" inline>
      <el-form-item label="请选择">
        <el-select></el-select>
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
        <el-button>确认</el-button>
      </el-form-item>
    </el-form>
    <el-card shadow="never">
      <el-table :data="query.list" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-card>
    <div style="text-align:right;padding-top:20px">
      <el-pagination background layout="prev, pager, next" :total="query.total">
      </el-pagination>
    </div>

    <el-card shadow="never" header="自定义组件">
      <el-table :data="query.list" style="width: 100%">
        <el-table-column label="头像" width="180">
          <template scope="scope">
            <img style="width:35px;border-radius:100px;display:inline-block" src="http://image.laodao.so/image/user/head/1532047099007590.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0" :alt="scope.row.name">
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name" width="180">
        </el-table-column>
        <el-table-column label="生日" width="250">
          <template scope="scope">
            <el-date-picker v-model="scope.row.date" size="mini"></el-date-picker>
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
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="danger" size="mini">编辑</el-button>
            <el-button type="primary" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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
        psize: 10,
        pdix: 1,
        list: [],
        total: 0
      }
    }
  },
  methods: {
    getList() {
      this.query.list = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
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