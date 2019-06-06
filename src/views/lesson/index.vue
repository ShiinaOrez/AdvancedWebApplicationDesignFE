<template>
  <div class="app-container">
    <el-col :span="12">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="课堂号：">
        <template>
          {{ this.lessonNum }}
        </template>
        </el-form-item>
      <el-form-item label="课程名称：">
        <template>
          {{ this.name }}
        </template>
      </el-form-item>
      <el-form-item label="任课教师：">
        <template>
          {{ this.teacherName }}
        </template>
      </el-form-item>
      <el-form-item label="上课地点：">
        <template>
          {{ this.location }}
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toLessonTable">返回课程列表</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </div>
</template>

<script>
import { getLessonCache } from '@/api/lesson'

export default {
  data() {
    return {
      name: '',
      location: '',
      teacherName: '',
      lessonNum: '',
      form: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    toLessonTable() {
      this.$router.push({path: '/lesson/lessonTable'})
    },
    fetchData() {
      this.loading = true
      getLessonCache().then(response => {
        this.name = response.data.item.name
        this.location = response.data.item.location
        this.teacherName = response.data.item.teacherName
        this.lessonNum = response.data.item.lessonNum
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

