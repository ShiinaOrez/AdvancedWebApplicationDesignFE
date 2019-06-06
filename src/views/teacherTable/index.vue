<template>
  <div class="app-container">
    
    <div align="center">
    <el-upload
      class="upload-demo"
      ref="upload"
      style="width:100%;"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">导入</el-button>    
    </el-upload>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="教工号" width="90">
        <template slot-scope="scope">
          {{ scope.row.teacherNumber }}
        </template>
      </el-table-column>
      <el-table-column label="教师名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="入职时间" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.enrollYear }}</span>
        </template>
      </el-table-column>
      <el-table-column width="178">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="onWatch(scope.row)">查看</el-button>
          <el-button type="primary" @click.native.prevent="deleteRow(scope.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { getTeacherList } from '@/api/table'
import { updateTeacherCache } from '@/api/teacher'
import { constants } from 'crypto';

export default {
  data() {
    return {
      info: {},
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
      getTeacherList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
      this.loading = false
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }, 
    onWatch(row) {
      this.loading = true
      console.log("The row:", row)
      updateTeacherCache(row.name, row.teacherNumber, row.enrollYear).then(response => {
        console.log("The row data:", row.name, row.teacherNumber, row.enrollYear)
        this.loading = false
      })
      this.loading = false
      this.$router.push({path: '/teacher/information'})
    }
  }
}
</script>
