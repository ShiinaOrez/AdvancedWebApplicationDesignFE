import Mock from 'mockjs'

var teachers = Mock.mock({
  'YuYing': {
    teacherNum: 'T12345',
    name: 'YuYing',
    enrollYear: '2015'
  },
  'ZhangLianFa': {
    teacherNum: 'T12346',
    name: 'ZhangLianFa',
    enrollYear: '2013'
  },
  'YangJinCai': {
    teacherNum: 'T12347',
    name: 'YangJinCai',
    enrollYear: '2017'
  }
})

var teacherName = 'YuYing'

function updateTeacher(name) {
  teacherName = name
}

function getTeacher() {
  return teachers[teacherName]
}

export default [
  {
    url: '/teacher/info',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          item: getTeacher()
        }
      }
    }
  },
  {
    url: '/teacher/info\.*',
    type: 'put',
    response: config => {
      const { name } = config.query
      updateTeacher(name)
      console.log(getTeacher(name))
      return {
        code: 20000
      }
    }
  }
]
