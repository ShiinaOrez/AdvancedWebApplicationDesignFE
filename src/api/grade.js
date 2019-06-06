import request from '@/utils/request'

export function getList() {
  return request({
    url: '/grade/list',
    method: 'get'
  })
}
