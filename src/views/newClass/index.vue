<template>
  <div class="app-container">
    <el-col :span="10">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="班级编号">
        <el-input placeholder="Major-20xx-xx" v-model="form.classNum" />
      </el-form-item>
      <el-form-item label="班主任姓名">
        <el-input v-model="form.headerName" />
      </el-form-item>
      <el-form-item label="班级专业">
        <el-input v-model="form.classMajor" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="onCreate">创建</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </div>
</template>

<script>
import { createClass } from '@/api/class'

export default {
  data() {
    return {
      form: {
        classNum: '',
        headerName: '',
        classMajor: ''
      }
    }
  },
  methods: {
    onCreate() {
      this.loading = true
      createClass(this.form.classNum, this.form.headerName, this.form.classMajor).then(response => {
        this.loading = false
      })
      this.loading = false
      this.$router.push({ path: '/class/classTable' })
    },
    toStudentTable() {
      this.$router.push({ path: '/student/studentTable' })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

