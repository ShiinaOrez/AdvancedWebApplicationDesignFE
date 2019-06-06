<template>
  <div class="app-container">
    <el-col :span="10">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="班级编号">
        <el-input placeholder="CS-2017-01" v-model="form.classNum" />
      </el-form-item>
      <el-form-item label="班主任姓名">
        <el-input placeholder="WangLinPing" v-model="form.headerName" />
      </el-form-item>
      <el-form-item label="班级专业">
        <el-input placeholder="Computer Science" v-model="form.classMajor" />
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click.native.prevent="toStudentTable">转至学生列表</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    toStudentTable() {
      this.$router.push({path: '/student/studentTable'})
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

