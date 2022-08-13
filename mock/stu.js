import mockjs from 'mockjs'

// 提供学员相关逻辑接口
export default {
    'GET /classes/test': {
        username: '张三',
        score: 100
    },
    'GET /classes/stu': mockjs.mock({
        code: 200,
        msg: '学院列表加载成功',
        'data|100': [
            {
                name: '@cname',
                score: '@integer(50,100)',
                city: '@city',
                time: '@date',
                key: '@id'
            }
        ]
    })
}
