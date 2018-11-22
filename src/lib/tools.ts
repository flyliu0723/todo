import * as cookie from './cookies'

/**
 * @description 获取登录状态
 * @returns true 登陆 false 未登录
 */
const loginStatus = () => {
    return cookie.getCookie('ttm_token')
}

export {
    loginStatus
}