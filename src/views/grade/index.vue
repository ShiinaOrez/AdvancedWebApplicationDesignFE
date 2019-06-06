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
      <el-table-column align="center" label="课程编号" width="160">
        <template slot-scope="scope">
          {{ scope.row.classNumber }}
        </template>
      </el-table-column>
      <el-table-column label="课程名称" >
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="教师姓名" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher }}</span>
        </template>
      </el-table-column>
      <el-table-column label="成绩" width="130" align="center">
        <template slot-scope="scope">
          {{ scope.row.grade }}
        </template>
      </el-table-column>
    </el-table>

    <br>

    <el-table
      v-loading="listLoading"
      :data="average"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="平均成绩" width="160">
        <template slot-scope="scope">
          {{ scope.row.num }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/grade'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      average: [{
        num: 0
      }],
      total: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response)
        this.list = response.data.items
        this.listLoading = false
        this.total = response.data.total

        var count = 0
        response.data.items.forEach(element => {
          count += element.grade
        });
      
        this.average[0].num = count / this.total
      })
      this.loading = false
    }
  }
}
</script>
