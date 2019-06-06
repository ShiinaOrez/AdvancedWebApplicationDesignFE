import request from '@/utils/request'

export function getList() {
  return request({
    url: '/class/list',
    method: 'get'
  })
}

export function updateStudentTable(num) {
  return request({
    url: '/class/studentTable',
    method: 'put',
    params: { num }
  })
}

export function getStudentTable() {
  return request({
    url: '/class/studentTable',
    method: 'get'
  })
}

export function createClass(num, header, major) {
  return request({
    url: '/class/createClass',
    method: 'post',
    params: { num, header, major }
  })
}
