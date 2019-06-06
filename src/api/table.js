import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getTeacherList(params) {
  return request({
    url: '/teacherTable/list',
    method: 'get',
    params
  })
}
