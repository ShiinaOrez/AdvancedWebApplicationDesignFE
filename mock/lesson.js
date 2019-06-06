import Mock from 'mockjs'

const lessonData = Mock.mock({
  C1001: {
    id: '@id',
    lessonNum: 'C1001',
    name: 'Database',
    teacherName: 'YuYing',
    location: '9501'
  },
  C1002: {
    id: '@id',
    lessonNum: 'C1002',
    name: 'Advanced Web Application Design',
    teacherName: 'WangLinPing',
    location: '6205'
  },
  C1003: {
    id: '@id',
    lessonNum: 'C1003',
    name: 'Operation System',
    teacherName: 'ZhangLianFa',
    location: '9403'
  },
  C1004: {
    id: '@id',
    lessonNum: 'C1004',
    name: 'Java',
    teacherName: 'YangJinCai',
    location: 'JKSYS'
  }
})

var lessonNum = 'C1001'

function updateLesson(lessonNumber) {
  lessonNum = lessonNumber
}

function getLesson() {
  return lessonData[lessonNum]
}

export default [
  {
    url: '/lesson/info',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          item: getLesson()
        }
      }
    }
  },
  {
    url: '/lesson/info\.*',
    type: 'put',
    response: config => {
      const { lessonNum } = config.query
      updateLesson(lessonNum)
      console.log(getLesson())
      return {
        code: 20000
      }
    }
  }
]
