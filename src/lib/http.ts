import axios from 'axios'
import config from './config.develop'

let ajaxFunc = (type: string, api: string, data: any) => {
    api = config.api + api
    return new Promise((resolve, reject) => {
        let ajax
        switch (type) {
        case 'GET':
            ajax = axios.get(api, {params: data})
            break
        case 'POST':
            ajax = axios.post(api, data)
            break
        default:
            ajax = axios.get(api, {params: data})
            break
        }
        ajax.then((res) => {
            if(res.data.code < 2000) {
                resolve(res.data)
            }else {
                Promise.reject({isApi: true, apiErrorData: res.data})
            }
        }).catch((error) => {
            if (error.isApi) {
                error.apiErrorData.type = 'api'
                reject(error.apiErrorData)
            } else {
                reject({
                    type: 'http',
                    msg: '网络错误'
                })
            }
        })
    })
}

let get = (api: string, data: any) => {
    return ajaxFunc('GET', api, data)
}
let post = (api: string, data: any) => {
    return ajaxFunc('POST', api, data)
}
export default {
    get,
    post
}