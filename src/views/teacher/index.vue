<template>
  <div class="app-container">
    <el-col :span="12">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="教师姓名：">
        <template>
          {{ this.name }}
        </template>
        </el-form-item>
      <el-form-item label="教工号：">
        <template>
          {{ this.teacherNum }}
        </template>
      </el-form-item>
      <el-form-item label="入职年份：">
        <template>
          {{ this.enrollYear }}
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toTeacherTable">返回教师列表</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </div>
</template>

<script>
import { getTeacherCache } from '@/api/teacher'

export default {
  data() {
    return {
      name: '',
      teacherNum: '',
      enrollYear: '',
      form: {
        name: '',
        stdNum: '',
        sex: '',
        header: [],
        date: '',
        intro: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    toTeacherTable() {
      this.$router.push({path: '/teacher/teacherTable'})
    },
    fetchData() {
      this.loading = true
      getTeacherCache().then(response => {
        this.name = response.data.item.name
        this.enrollYear = response.data.item.enrollYear
        this.teacherNum = response.data.item.teacherNum
        console.log(this.name)
        this.loading = false
      })
      this.loading = false
    },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

