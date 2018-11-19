/**
 * cookie相关操作
 * Created by fly on 2017/5/1.
 */
/**
 * 设置cookie
 * @param name 键
 * @param value 值
 */
const setCookie = (name: string, value: string) => {
    document.cookie = name + "="+ escape (value);
}
/**
 * 获取cookie
 * @param sKey 要获取的cookie的键
 * @returns {null}
 */
const getCookie = (sKey: string) => {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
}
/**
 * 删除cookie
 * @param name 要删除的cookie的键
 * @returns {null}
 */
const delCookie = (name: string) => {
    const cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval;
}

export {
    setCookie,
    getCookie,
    delCookie
}