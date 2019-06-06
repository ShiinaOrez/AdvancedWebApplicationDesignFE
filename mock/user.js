import Mock from 'mockjs'

const tokens = {
  '管理员': 'admin-token',
  '学生': 'user-token',
  '班主任': 'header-token'
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'user-token': {
    roles: ['user'],
    introduction: 'I am a user',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Student'
  },
  'header-token': {
    roles: ['header'],
    introduction: 'I am a head teacher.',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Head Teacher'
  }
}

var data = Mock.mock({
  info: {
    name: '王鹏宇',
    stdNum: '2017211xxx',
    header: '张伟',
    enrollYear: '2017-09-01',
    education: '本科生',
    intro: '我是一个可爱的安卓Boy.'
  }
})

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { role } = config.body
      const token = tokens[role] // using role to confirm.

      // mock error
      // if (!token) {
      //   return {
      //     code: 60204,
      //     message: 'Account and password are incorect.'
      //   }
      // }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  {
    url: '/user/info',
    type: 'put',
    response: config => {
      const { token } = config.query

      if (!token) {
        return {
          code: 50009,
          message: 'Token not found.'
        }
      } else {
        const { name, stdNum, header, enrollYear, education, intro } = config.body
        data.name = name
        data.stdNum = stdNum
        data.header = header
        data.enrollYear = enrollYear
        data.education = education
        data.intro = intro
      }
      return {
        code: 20000
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
