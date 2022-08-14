import mockjs from 'mockjs'

let dataList = mockjs.mock({
    code: 200,
    msg: '学院列表加载成功',
    'results|100': [
        {
            name: '@cname(2,3)',
            score: '@integer(50,100)',
            city: '@city',
            time: '@date',
            objectId: '@id'
        }
    ]
})
// 提供学员相关逻辑接口
export default {
    'GET /classes/test': {
        username: '张三',
        score: 100
    },
    'GET /classes/stu': dataList,
    'DELETE /classes/stu': (req, res) => {
        // console.log(req.query)
        let { id } = req.query
        dataList.results = dataList.results.filter(item => {
            if (item.objectId == id) {
                res.send({
                    code: 200,
                    msg: '删除成功'
                })
            }
            return item.objectId !== id
        })
        res.send({
            code: 201,
            msg: '未找到对应数据'
        })
    }
}
