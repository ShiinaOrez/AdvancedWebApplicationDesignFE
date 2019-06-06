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
      <el-table-column align="center" label="课堂号" width="90">
        <template slot-scope="scope">
          {{ scope.row.classNumber }}
        </template>
      </el-table-column>
      <el-table-column label="课程名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="任课教师" width="130" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上课地点" width="130" align="center">
        <template slot-scope="scope">
          {{ scope.row.location }}
        </template>
      </el-table-column>
      <el-table-column width="178">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="onWatch(scope.row.classNumber)">编辑</el-button>
          <el-button type="primary" @click.native.prevent="onWatch(scope.row.classNumber)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { updateLessonCache } from '@/api/lesson'

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
        this.list = response.data.items
        this.listLoading = false
      })
      this.loading = false
    },
    onWatch(lessonNum) {
      this.loading = true
      console.log("The lesson number: ", lessonNum)
      updateLessonCache(lessonNum).then(response => {
        this.loading = false
      })
      this.loading = false
      this.$router.push({path: '/lesson/info'})
    }
  }
}
</script>
