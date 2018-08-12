<template>
  <div class="app-calendar">
    <vue-event-calendar :events="demoEvents">
      <template slot-scope="props">
      </template>
    </vue-event-calendar>
  </div>
</template>
<script>
//临时的日历组件
import Vue from 'vue'
import vueEventCalendar from 'vue-event-calendar'
import 'vue-event-calendar/dist/style.css'
Vue.use(vueEventCalendar, { locale: 'zh' })
export default {
  data() {
    return {
      //日历
      demoEvents: [
        {
          date: '2018/8/11',
          title: 'xx'
        },
        {
          date: '2018/8/3',
          title: 'xx'
        },
        {
          date: '2018/8/20',
          title: 'xx'
        },
        {
          date: '2018/8/23',
          title: 'xx'
        }
      ]
    }
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
.app-calendar
  .__vev_calendar-wrapper
    .cal-wrapper
      padding 0px
      width 100%
      .cal-header
        &>div
          padding 5px 10px
      .cal-body
        .weeks
          .item
            line-height 40px
      .date-num
        line-height 40px
    .events-wrapper
      display none
</style>