import axios from 'axios'
axios.defaults.timeout = 10000;

export default async (options) => {
    const params = {
        // appId: env.appId,
        // ticket: env.ticket,
        ...options.params,
    }
    const data = options.data || {}
    // removeEmptyKey(params)
    // removeEmptyKey(data)
    // const loading = new LoadingService()

    try {
        // if (options.loading) {
        //     loading.show()
        // }
        const res = await axios({
            url: options.url,
            method: options.method || 'GET',
            headers: options.headers || {},
            params,
            data,
        })
        let {success} = res.data
        // debugger
        if (success) {
            return res.data.data
        } else {
            return res
            alert('请求失败')
        }

        // if (options.loading) {
        //     loading.close()
        // }
        return res.data || {}
    } catch (e) {
        console.log('fail')
        // if (options.loading) {
        //     loading.close()
        // }
        // handleError(options.name, '网络错误-' + String(e))
    }
}