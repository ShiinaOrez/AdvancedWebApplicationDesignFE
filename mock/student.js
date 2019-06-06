import Mock from 'mockjs'

var classList = Mock.mock({
  items: [
    { classNum: 'Class-1', header: 'WangLinPing', major: '计算机科学与技术' },
    { classNum: 'Class-2', header: 'ZhangLianFa', major: '计算机科学与技术' },
    { classNum: 'Class-3', header: 'WangJingHua', major: '计算机科学与技术' }
  ]
})

var classes = Mock.mock({
  'Class-1': { header: 'WangLinPing', students: [{
    name: '宋汝阳',
    stdNum: '2017211712',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '唐文韬',
    stdNum: '2017211714',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '李浩然',
    stdNum: '2017211713',
    enrollYear: '2017-09-01',
    type: '本科生'
  }] },
  'Class-2': { header: 'ZhangLianFa', students: [{
    name: '李康禹',
    stdNum: '2017211786',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '韩萧',
    stdNum: '2017211678',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '胡库伦',
    stdNum: '2017211987',
    enrollYear: '2017-09-01',
    type: '本科生'
  }] },
  'Class-3': { header: 'WangJingHua', students: [{
    name: '张宇轩',
    stdNum: '2017211666',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '徐子儒',
    stdNum: '2017211987',
    enrollYear: '2017-09-01',
    type: '本科生'
  },
  {
    name: '胡任重',
    stdNum: '2017211563',
    enrollYear: '2017-09-01',
    type: '本科生'
  }] }
})

var classNum = 'Class-1'

function updateClass(classNumber) {
  classNum = classNumber
}

function getClassStudentTable() {
  return classes[classNum].students
}

function createClass(num, header, major) {
  classList.items[classList.items.length] = {
    classNum: num,
    header: header,
    major: major
  }
}

export default [
  {
    url: '/class/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: classList.items
      }
    }
  },
  {
    url: '/class/studentTable',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          items: getClassStudentTable()
        }
      }
    }
  },
  {
    url: '/class/studentTable\.*',
    type: 'put',
    response: config => {
      const { num } = config.query
      updateClass(num)
      console.log(getClassStudentTable())
      return {
        code: 20000
      }
    }
  },
  {
    url: '/class/createClass\.*',
    type: 'post',
    response: config => {
      const { num, header, major } = config.query
      createClass(num, header, major)
      return {
        code: 20000
      }
    }
  }
]
