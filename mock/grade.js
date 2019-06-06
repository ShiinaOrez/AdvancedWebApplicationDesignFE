import Mock from 'mockjs'

const gradeData = Mock.mock({
  'items': [{
    id: '@id',
    classNumber: 'C1001',
    name: 'Database',
    teacher: 'YuYing',
    grade: 88
  },
  {
    id: '@id',
    classNumber: 'C1002',
    name: 'Advanced Web Application Design',
    teacher: 'WangLinPing',
    grade: 90
  },
  {
    id: '@id',
    classNumber: 'C1003',
    name: 'Operation System',
    teacher: 'ZhangLianFa',
    grade: 92
  },
  {
    id: '@id',
    classNumber: 'C1004',
    name: 'Java',
    teacher: 'YangJinCai',
    grade: 84
  }]
})

export default [
  {
    url: '/grade/list',
    type: 'get',
    response: config => {
      const items = gradeData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
