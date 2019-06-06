import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/form',
    children: [
      {
        path: 'form',
        name: '个人信息',
        component: () => import('@/views/form/index'),
        meta: {
          title: '个人信息',
          icon: 'form'
        }
      }
    ]
  },

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/class',
    component: Layout,
    redirect: '/class/information',
    name: 'Class',
    meta: { title: '班级', icon: 'nested' },
    children: [
      {
        path: 'information',
        name: 'classInformation',
        component: () => import('@/views/class_/index'),
        meta: { title: '班级信息', icon: 'nested' }
      },
      {
        path: 'classTable',
        name: 'classTable',
        component: () => import('@/views/classTable/index'),
        meta: { title: '班级序列', icon: 'nested' }
      },
      {
        path: 'newClass',
        name: 'newClass',
        component: () => import('@/views/newClass/index'),
        meta: { title: '新建班级', icon: 'nested' }
      }
    ]
  },

  {
    path: '/student',
    component: Layout,
    redirect: '/student/studentTable',
    name: 'Student',
    meta: { title: '学生', icon: 'menu' },
    children: [
      {
        path: 'studentTable',
        name: 'studentTable',
        component: () => import('@/views/studentTable/index'),
        meta: { title: '学生信息表', icon: 'table' }
      }
    ]
  },

  {
    path: '/lesson',
    component: Layout,
    redirect: '/lesson/lessonTable',
    name: 'Lesson',
    meta: { title: '课程', icon: 'example' },
    children: [
    //      {
    //        path: 'table',
    //        name: 'Table',
    //        component: () => import('@/views/table/index'),
    //        meta: { title: 'Table', icon: 'table' }
    //      },
      {
        path: 'lessonTable',
        name: 'lessonTable',
        component: () => import('@/views/lessonTable/index'),
        meta: { title: '课程信息表', icon: 'table' }
      },
      {
        path: 'info',
        name: 'lessonInformation',
        component: () => import('@/views/lesson/index'),
        meta: { title: '课程信息', icon: 'form' }
      },
      {
        path: 'selection',
        name: 'lessonSelection',
        component: () => import('@/views/lessonSelection/index'),
        meta: { title: '选课', icon: 'link' }
      }
    ]
  },

  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/teacherTable',
    name: 'Teacher',
    meta: { title: '教师', icon: 'link' },
    children: [
      {
        path: 'teacherTable',
        name: 'teacherTable',
        component: () => import('@/views/teacherTable/index'),
        meta: { title: '教师信息表', icon: 'table' }
      },
      {
        path: 'information',
        name: 'teacherInformation',
        component: () => import('@/views/teacher/index'),
        meta: { title: '教师信息', icon: 'form' }
      }
    ]
  },

  {
    path: '/grade',
    component: Layout,
    redirect: '/grade/list',
    name: 'Grade',
    meta: { title: '成绩', icon: 'nested' },
    children: [
      {
        path: 'list',
        name: 'gradeList',
        component: () => import('@/views/grade/index'),
        meta: { title: '成绩列表', icon: 'nested' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
