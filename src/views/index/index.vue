<template>
  <div>
    <div class="contain-box">
      <el-row :gutter="15" class="count-data">
        <el-col :lg="6" :md="6" :sm="12" v-for="(i,idx) in countData" :key="idx">
          <div class="count-item">
            <div class="count-icon">
              <i :class="i.icon" :style="{color:i.color}"></i>
            </div>
            <div class="count-info">
              <p class="count-name">{{i.name}}</p>
              <p class="count-value">{{i.count}}{{i.unit}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="contain-box">
      <el-row :gutter="15">
        <el-col :md="12" :sm="24">
          <el-card shadow="never" style="margin-bottom:10px">
            <chart :options="bar" style="width:100%;height:350px" ref="bar" :auto-resize="true" theme="ovilia-green" />
          </el-card>
        </el-col>
        <el-col :md="12" :sm="24">
          <el-card shadow="never">
            <chart :options="line" style="width:100%;height:350px" ref="bar" :auto-resize="true" theme="ovilia-green" />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="contain-box">
      <el-row :gutter="15">
        <el-col :lg="8" :md="12">
          <el-card shadow="never" style="height:400px;margin-bottom:10px">
            <div slot="header">
              <i class="el-icon-message"></i> 通知公告
              <a style="float:right">查看更多>></a>
            </div>
            <el-table :show-header="false" :data="notices" style="width: 100%">
              <el-table-column width="60px">
                <template slot-scope="scope">
                  <el-tag size="mini">分类</el-tag>
                </template>
              </el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="title" label="">
              </el-table-column>
              <el-table-column prop="createTime" label="" width="100px">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :lg="8" :md="12">
          <el-card shadow="never" style="height:400px;margin-bottom:10px">
            <div slot="header">
              <i class="el-icon-message"></i> 新闻发布
              <a style="float:right">查看更多>></a>
            </div>
            <el-table :show-header="false" :data="articles" style="width: 100%">
              <el-table-column width="60px">
                <template slot-scope="scope">
                  <el-tag size="mini">分类</el-tag>
                </template>
              </el-table-column>
              <el-table-column :show-overflow-tooltip="true" prop="title" label="">
              </el-table-column>
              <el-table-column prop="createTime" label="" width="100px">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :lg="8" :md="12">
          <el-card shadow="never" style="height:400px;margin-bottom:10px">
            <div slot="header">
              <i class="el-icon-date"></i>
              待办日历
            </div>
            <event-calendar></event-calendar>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
//https://github.com/ecomfe/vue-echarts
import ECharts from 'vue-echarts/components/ECharts.vue'
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import eventCalendar from '@/components/app/event-calendar.vue'
export default {
  data() {
    function randomize() {
      return [0, 0, 0].map((v) => {
        return Math.round(300 + Math.random() * 700) / 10
      })
    }
    return {
      countData: [
        {
          name: '人员',
          count: 20,
          icon: 'el-icon-service',
          unit: '人',
          color: '#409EFF'
        },
        {
          name: '产品',
          count: 190,
          icon: ' el-icon-goods',
          unit: '种',
          color: '#409EFF'
        },
        {
          name: '客户',
          count: 8888,
          icon: 'el-icon-phone',
          unit: '人',
          color: '#409EFF'
        },
        {
          name: '本周订单',
          count: 200,
          icon: ' el-icon-tickets',
          unit: '单',
          color: '#409EFF'
        }
      ],
      bar: {
        legend: {
          data: [{ name: 'A店' }, { name: 'B店' }, { name: 'C店' }]
        },
        tooltip: {},
        dataset: {
          source: [
            ['6月', ...randomize()],
            ['7月', ...randomize()],
            ['8月', ...randomize()],
            ['9月', ...randomize()]
          ]
        },
        xAxis: { type: 'category', name: '月份' },
        yAxis: { name: '万元' },
        series: [
          { type: 'bar', name: 'A店', color: '#00BBFF' },
          { type: 'bar', name: 'B店', color: '#49a9ee' },
          { type: 'bar', name: 'C店', color: '#0066bb' }
        ]
      },
      line: {
        title: {
          text: '销量对比',
          show: true
        },
        legend: {
          data: [{ name: '上上周' }, { name: '上周' }, { name: '本周' }]
        },
        tooltip: {},
        xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
        yAxis: { name: '万元' },
        series: [
          {
            type: 'line',
            name: '上上周',
            color: '#00BBFF',
            data: [6, 18, 20, 40, 26, 50, 20]
          },
          {
            type: 'line',
            name: '上周',
            color: '#00BBFF',
            label: {
              show: true
            },
            data: [12, 33, 22, 44, 23, 55, 23]
          },
          {
            type: 'line',
            name: '本周',
            label: {
              show: true
            },
            color: '#ff3b30',
            data: [10, 13, 32, 24, 28]
          }
        ]
      },
      notices: [],
      articles: []
    }
  },
  components: {
    chart: ECharts,
    eventCalendar
  },
  methods: {
    getNotices() {
      this.$api.list.getListArticle().then((res) => {
        this.notices = res.data.list.splice(0, 6)
      })
    },
    getArticles() {
      this.$api.list.getListArticle().then((res) => {
        this.articles = res.data.list.splice(0, 6)
      })
    }
  },
  computed: {},
  mounted() {
    this.getNotices()
    this.getArticles()
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
.contain-box
  margin-bottom 20px
  .count-data
    .count-item
      border 1px solid #e6e6e6
      border-radius 5px
      padding 10px 15px
      margin-bottom 10px
      .count-icon
        float left
        font-size 40px
        line-height 50px
      .count-info
        padding-left 60px
        line-height 25px
        .count-name
          text-align right
        .count-value
          font-size 20px
          font-weight bold
</style>
