<template>
  <div class="app-container">

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="学号" width="160">
        <template slot-scope="scope">
          {{ scope.row.stdNum }}
        </template>
      </el-table-column>
      <el-table-column label="学生姓名" >
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="入学时间" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.enrollYear }}</span>
        </template>
      </el-table-column>
      <el-table-column label="就读类型" width="130" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getStudentTable } from '@/api/class'

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
      getStudentTable().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
      this.loading = false
    }
  }
}
</script>
