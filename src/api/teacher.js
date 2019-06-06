import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/teacher/login',
    method: 'post',
    data
  })
}

export function signup(data) {
  return request({
    url: '/teacher/signup',
    method: 'post',
    data
  })
}

export function getTeacherCache(params) {
  return request({
    url: '/teacher/info',
    method: 'get',
    params
  })
}

export function updateTeacherCache(name, teacherNum, enrollYear) {
  var data = {
    name: name,
    teacherNum: teacherNum,
    enrollYear: enrollYear
  }
  console.log('The data in api:', name, teacherNum, enrollYear)
  return request({
    url: '/teacher/info',
    method: 'put',
    data,
    params: { name }
  })
}
