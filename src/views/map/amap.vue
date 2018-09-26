<template>
  <div class="amap-page-container">
    <a href="https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install" target="_black">vue-amap官网</a>
    <h2>定位：
      <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
      </span>
      <span v-else>正在定位</span>
    </h2>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
    </el-amap>

    <h2>标记</h2>
    <el-amap class="amap-demo" :zoom="10" :center="center">
      <el-amap-circle-marker v-for="marker in markers" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-circle-marker>

      <el-amap-text v-for="text in texts" :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>

      <el-amap-info-window :position="currentWindow.position" :content="currentWindow.content" :visible="currentWindow.visible" :events="currentWindow.events">
      </el-amap-info-window>
    </el-amap>

    <h2>点击事件： position: [{{ lng }}, {{ lat }}] address: {{ address }}</h2>
    <el-amap class="amap-demo" :zoom="10" :center="center" :events="events">
    </el-amap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      address: '',
      loaded: false,
      plugin: [
        {
          pName: 'Geolocation',
          events: {
            init: (o) => {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  this.lng = result.position.lng
                  this.lat = result.position.lat
                  this.center = [this.lng, this.lat]
                  this.loaded = true
                  // this.$nextTick()
                }
              })
            }
          }
        }
      ],
      events: {
        click: (e) => {
          let { lng, lat } = e.lnglat
          this.lng = lng
          this.lat = lat

          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                this.address = result.regeocode.formattedAddress
                // this.$nextTick()
              }
            }
          })
        },
      },

      markers: [
        {
          center: [121.5273285, 31.21515044],
          radius: 20,
          fillOpacity: 1,
          fillColor: 'rgba(0,0,255,1)',
          events: {
            click: () => {
              alert('click')
            }
          }
        }
      ],

      texts: [
        {
          position: [121.4273285, 31.28515044],
          text: '文字标记',
          offset: [0, 0],
          events: {
            click: () => {
              alert('click text')
            }
          }
        }
      ],

      windows: [
        {
          position: [121.5273285, 31.21515044],
          content: 'Hi! I am here!',
          visible: true,
          events: {
            close() {
              console.log('close infowindow1')
            }
          }
        },
        {
          position: [121.5375285, 31.21515044],
          content: 'Hi! I am here too!',
          visible: true,
          events: {
            close() {
              console.log('close infowindow2')
            }
          }
        }
      ],
      slotWindow: {
        position: [122.5163285, 30.21515044]
      },
      currentWindow: {
        position: [0, 0],
        content: '',
        events: {},
        visible: false
      }
    }
  },
  mounted() {
    this.currentWindow = this.windows[0]
  },
  methods: {
    switchWindow(tab) {
      this.currentWindow.visible = false
      this.$nextTick(() => {
        this.currentWindow = this.windows[tab]
        this.currentWindow.visible = true
      })
    }
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/func.styl"
.amap-page-container
  .amap-demo
    height 300px
</style>