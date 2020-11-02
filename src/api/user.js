import _requset from '@/utils/request'
// import {_requset} from '@/utils/request'
export const login = (params) => _requset('/vue-element-admin/user/login', params, 'post')
export const getInfo = (params) => _requset('/vue-element-admin/user/info', params, 'get')
export const logout = (params) => _requset('/vue-element-admin/user/logout', params, 'post')
// export function login(data) {
//   return _requset({'/vue-element-admin/user/login','post',data})
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }
