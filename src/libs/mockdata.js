import Mock from 'mockjs'
import {
    apiurl
} from '@/libs/url.js'
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