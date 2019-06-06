import Mock from 'mockjs'

const data = Mock.mock({
  'items': [{
    id: '@id',
    classNumber: 'C1001',
    name: 'Database',
    teacher: 'YuYing',
    location: '9501'
  },
  {
    id: '@id',
    classNumber: 'C1002',
    name: 'Advanced Web Application Design',
    teacher: 'WangLinPing',
    location: '6205'
  },
  {
    id: '@id',
    classNumber: 'C1003',
    name: 'Operation System',
    teacher: 'ZhangLianFa',
    location: '9403'
  },
  {
    id: '@id',
    classNumber: 'C1004',
    name: 'Java',
    teacher: 'YangJinCai',
    location: 'JKSYS'
  }]
})

const teacherData = Mock.mock({
  'items': [
    {
      id: '@id',
      teacherNumber: 'T12345',
      name: 'YuYing',
      enrollYear: '2015'
    },
    {
      id: '@id',
      teacherNumber: 'T12346',
      name: 'ZhangLianFa',
      enrollYear: '2013'
    },
    {
      id: '@id',
      teacherNumber: 'T12347',
      name: 'YangJinCai',
      enrollYear: '2017'
    }
  ]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/teacherTable/list',
    type: 'get',
    response: config => {
      const items = teacherData.items
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
