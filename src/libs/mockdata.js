import Mock from 'mockjs'
import {
  apiurl
} from '@/libs/url.js'
let article = [`<p>
随着经济的不断发展，人们生活水平的不断提高，人们对物质、文化生活的要求也逐渐提高。越来越多的人在工作之余，和家人、朋友一起相约，走进农村、农田，体验休闲采摘的乐趣。我国幅员辽阔，大多数地区到了冬季，鲜果均已下市，此时只有大棚里的草莓春意盎然，红红的果子挂满“枝头”，不禁让人垂涎欲滴。可常规的地面栽培模式，垄面低，不仅农事操作花工、费时费力，也不适合休闲采摘，且与当前劳动力短缺和老龄化严重冲突；各种架式基质栽培模式确实省工省力，适合休闲观光采摘，但成本太高，广大草莓种植户望而却步。成本问题严重限制了草莓省力化栽培的规模化发展。经过多年的试验研究，我们研发出了一种低成本的省力化栽培架式——超高垄。这里，我就向大家介绍一下这种架式的具体搭建方法和注意事项。
</p>`,
  `<p>
<strong>一、明晰几个概念</strong>
</p>`,
  `<p>
<strong>1、什么是超高垄栽培？</strong>
</p>`,
  `<p>
超高垄栽培就是搭建栽培槽和挖深沟形成超高垄，然后将土壤、基质或两者混合物回填到栽培槽内，进行草莓生产的一种栽培方式。
</p>`,
  `<p>
<strong>2、什么是栽培槽？</strong>
</p>`,
  `<p>
栽培槽就是用于盛装土壤和基质的凹槽，由热镀锌钢管、螺纹钢、铁丝和控根器等搭建而成。
</p>`,
  `<p>
<strong>3、什么是过道？</strong>
</p>`,
  `<p>
过道就是两架栽培槽之间的地方，方便采摘或田间管理。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536572397715630348.jpg" alt="" />
</p>`,
  `<p>
（超高垄栽培）
</p>`,
  `<p>
<strong>二、搭建方法</strong>
</p>`,
  `<p>
<strong>第一步：放样</strong>
</p>`,
  `<p>
在大棚的两端放样，栽培槽宽度35cm，槽间距80～90cm。以草莓大棚宽度的中点作为栽培槽的中点，向两边各量出17.5cm，就是将来的栽培槽。在栽培槽两边分别留出80cm，就是将来的过道，以后依次放样。6米跨度大棚可以做5条栽培槽，过道80～90cm，8米跨度大棚可以做7条栽培槽，过道80cm。
</p>`,
  `<p>
<strong>第二步：做栽培槽</strong>
</p>`,
  `<p>
<strong>1、打边柱支撑</strong>
</p>`,
  `<p>
用1.3m长的6分镀锌管，平行对应固定2排立柱，横向间隔35cm，纵向间距25m，1.3m长的直径1cm钢筋棍或12mm直径的螺纹钢、6分镀锌钢管，纵向间距1m，分别垂直打入地下8cm，地上净高50cm，与6分镀锌管共同组成栽培槽边柱。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536580210213372919.jpg" alt="" />
</p>`,
  `<p>
（打边柱支撑）
</p>`,
  `<p>
<strong>2、拉热镀锌铁丝</strong>
</p>`,
  `<p>
用14#或16#热镀锌铁丝从立柱的一端拉到另一端，每排边柱拉4层14#或16#热镀锌铁丝，每层14#或16#热镀锌铁丝间隔10cm，底部和顶端的2层铁丝要各空出5cm，中间再平均分布2层铁丝。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536583335219831409.jpg" alt="" />
</p>`,
  `<p>
（拉铁丝）
</p>`,
  `<p>
<strong>第三步：埋置预埋件</strong>
</p>`,
  `<p>
在每排立柱的延长线上50cm处，挖50cm深坑，砖块上绑扎12#热镀锌铁丝埋入坑中，露出地面1cm，通过花蓝螺栓与栽培槽两端的立柱连接，以调节松紧；在预埋砖块的位置加1根钢管立柱，包住花蓝螺栓。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536586460212588072.jpg" alt="" />
</p>`,
  `<p>
<strong>第四步：做控根器围挡</strong>
</p>`,
  `<p>
用规格为50cm高的控根器贴着边柱和铁丝的内壁围起来，两端分别将控根器折成直角，接头用控根器扣子扣起来，围成栽培槽；并让出花篮螺栓，方便调节。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536589585214344735.jpg" alt="" />
</p>`,
  `<p>
（做控根器围挡）
</p>`,
  `<p>
<strong>第五步：横向加固</strong>
</p>`,
  `<p>
栽培槽每根立柱上间距20cm横向加固两道12#热镀锌铁丝。
</p>`,
  `<p>
<strong>第六步：挖沟填土</strong>
</p>`,
  `<p>
过道的土挖出，回填到栽培槽；也可用土与基质混合填槽。视是否使用基质混合装填情况，向下挖20～30cm的土壤，与50cm高的栽培槽共同构成70～90cm超高垄。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536592710216101397.jpg" alt="" />
</p>`,
  `<p>
（挖沟填土）
</p>`,
  `<p>
<strong>第七步：安装滴水管</strong>
</p>`,
  `<p>
与地面安装地水管不同的是，每条栽培槽上要多加一根50cm长的主管，1个三通、1个弯头和1个堵头，把滴水管到抬高到垄面上。其他安装相同。
</p>`,
  `<p>
滴管安装好后超高垄架式已经搭建完成，下一步就可以栽苗了，其他管理与地面栽培管理大致相同，可参考地面管理技术。略有不同的是，亩用苗数5500～6000株，与常规栽培相比亩减少用苗840～1100株。
</p>`,
  `<p>
<img src="http://sngj.laodao.so/upload/image/20180809/6366940536597397712087305.jpg" alt="" />
</p>`,
  `<p>
（安装滴水管）
</p>`,
  `<p>
<strong>三、注意事项</strong>
</p>`,
  `<p>
草莓超高垄架式搭建简单，成本较低，根据当地市场价格不同，每亩成本在1～1.2万元，与搭建普通高架相比成本降低4～5万元；
</p>`,
  `<p>
搭建和田间管理操作简单、易学。但在搭建过程中，还有几点特别需要注意的事项，在这里跟大家唠叨唠叨，请务必注意！
</p>`,
  `<p>
1、这种架式适合在地势高燥、平整的土地搭建，易水淹的田块慎用！
</p>`,
  `<p>
2、搭建的时候垄的方向宜选择接受光照均匀的南北方向。
</p>`,
  `<p>
3、栽培槽不宜宽于或窄于35cm。过宽基质用量大，空间利用率低；过窄行间距小，植株密不透风，通风透光性差，植株易感病。
</p>`,
  `<p>
4、栽培槽不宜过长。每条栽培槽长度在50m以内为宜。过长易欠压而导致水分管理不便。
</p>`,
  `<p>
5、做栽培槽的铁丝不要粗，14#或16#热镀锌铁丝就足以，粗了反而收不紧，铁丝一定要收紧才有力。
</p>`,
  `<p>
6、横向加固的铁丝一定要略粗些才有劲。哪怕加固1道铁丝也要加固，否则易起鼓或向一边倾斜。
</p>`,
  `<p>
7、这条是最重要的一条，千万千万要注意的是：在挖土装填土壤或基质的时候，
<strong>一定要离开边柱10cm左右开挖</strong>，主要是考虑控根器是塑料制品，固定能力欠佳。如果紧贴柱脚开挖的话，土壤装填时会导致土壤垮塌；
<strong>土壤或基质填满后，切记要沉实！沉实！再沉实!</strong>最好结合菜籽饼、微生物菌肥等基肥一起施入。最终垄面要略高于架面，呈面包形。
</p>`
]
//使用正则表达式匹配，消除query参数拼接导致无法匹配到
Mock.mock(new RegExp('list/table'), 'get', {
  code: 200,
  data: {
    'list|10': [{
      id: '@increment',
      name: '@cname',
      birthday: '@date',
      'sex|1': ['男', '女'],
      address: '@county(true)',
      headurl: 'http://placekitten.com/g/100/100',
    }],
    total: '@integer(100,200)'
  }
})
Mock.mock(new RegExp('list/card'), 'get', {
  code: 200,
  data: {
    'list|20': [{
      id: '@increment',
      name: '@cname',
      birthday: '@date',
      'sex|1': ['男', '女'],
      address: '@county(true)',
      headurl: 'http://placekitten.com/g/300/400',
    }],
    total: '@integer(100,200)'
  }
})
Mock.mock(new RegExp('list/article'), 'get', {
  code: 200,
  data: {
    'list|10': [{
      id: '@increment',
      title: '@ctitle',
      context: '@cparagraph',
      createTime: '@date',
      'sex|1': ['男', '女'],
      cover: 'http://placekitten.com/g/320/240',
    }],
    total: '@integer(100,200)'
  }
})
Mock.mock(new RegExp('article/info'), 'get', {
  code: 200,
  data: {
    id: '@increment',
    title: '@ctitle(15,30)',
    content: () => {
      let idx = Mock.Random.integer(1, article.length - 15)
      return article.slice(idx, idx + 15).join('')
    },
    'type|1': [
      '新闻', '生活', '社会', '娱乐', '财经'
    ],
    date: '@date',
    subtitle: '@cparagraph',
    author: '@cname',
    cover: 'http://placekitten.com/g/320/240',
  }
})

//用户登录注册信息
Mock.mock(new RegExp('user/getcode'), {
  code: 200,
})
Mock.mock(new RegExp('user/register'), 'post', {
  code: 200,
})
Mock.mock(new RegExp('user/login'), 'post', {
  code: 200,
  data: {
    token: 'faosifhoasfaslkdfaj'
  }
})
Mock.mock(new RegExp('user/info'), {
  code: 200,
  data: {
    name: '@cname',
  }
})
Mock.mock(new RegExp('user/checklogin'), {
  code: 200,
  data: {
    login: true
  }
})
