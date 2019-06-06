import request from '@/utils/request'

export function getLessonCache(params) {
  return request({
    url: '/lesson/info',
    method: 'get',
    params
  })
}

export function updateLessonCache(lessonNum) {
  console.log('The id in api:', lessonNum)
  return request({
    url: '/lesson/info',
    method: 'put',
    params: { lessonNum }
  })
}
