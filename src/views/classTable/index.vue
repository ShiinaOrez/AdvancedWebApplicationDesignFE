<template>
  <div class="app-container">
  <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="toNewClass">新建</el-button>


    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="班级序号" width="90">
        <template slot-scope="scope">
          {{ scope.row.classNum }}
        </template>
      </el-table-column>
      <el-table-column label="班主任名称">
        <template slot-scope="scope">
          {{ scope.row.header }}
        </template>
      </el-table-column>
      <el-table-column label="班级专业">
        <template slot-scope="scope">
          {{ scope.row.major }}
        </template>
      </el-table-column>
      <el-table-column width="150">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="toStudentTable(scope.row.classNum)">查看学生列表</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList, updateStudentTable } from '@/api/class'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
      this.loading = false
    },
    toStudentTable(classNum) {
      this.loading = true
      console.log('The class number: ', classNum)
      updateStudentTable(classNum).then(response => {
        this.loading = false
      })
      this.loading = false
      this.$router.push({ path: '/student/studentTable' })
    },
    toNewClass() {
      this.$router.push({ path: '/class/newClass' })
    }
  }
}
</script>
