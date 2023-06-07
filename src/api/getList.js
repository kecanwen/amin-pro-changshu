import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/getList',
    method: 'get',
    params,
  })
}
