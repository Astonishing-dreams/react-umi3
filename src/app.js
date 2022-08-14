// 这个文件是做项目的运行时的配置

// 异步请求相关的配置
export const request = {
    // 请求拦截
    requestInterceptors: [
        (url, options) => {
            // console.log(url, options)
            options.url = 'https://87mlu2xu.lc-cn-n1-shared.com/1.1' + url
            options.headers = {
                "X-LC-Id": "87MLU2xUwck0Hpsa3CHXD9Mn-gzGzoHsz",
                "X-LC-Key": "Gc2bjcqOg0LkCPEmH5aP6pC0",
                "Content-Type": "application/json"
            }
            return options // 这里的是自定义的请求配置
        }
    ],
    // 响应拦截
    responseInterceptors: [
        (response, options) => {
            console.log(response, options)
            return response // 这里的是后端下发的数据包
        }
    ]
}
