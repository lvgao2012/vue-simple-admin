import http from '@/libs/http.js'
const apis = {
    getList(psize, pidx) {
        return http.get({
            url: 'list/table',
            data: {
                pageSize: 10,
                pageIndex: 1
            }
        })
    },
    getListB(psize, pidx) {
        return http.get({
            url: 'list/b',
            data: {
                pageSize: 10,
                pageIndex: 1
            }
        })
    },
    getListCard(psize, pidx) {
        return http.get({
            url: 'list/card',
            data: {
                pageSize: 10,
                pageIndex: 1
            }
        })
    },
    getListArticle(psize, pidx) {
        return http.get({
            url: 'list/article',
            data: {
                pageSize: 10,
                pageIndex: 1
            }
        })
    },
}
export default apis