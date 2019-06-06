<template>
  <div class="app-container">
    <el-col :span="12">
    <el-form ref="form" :model="form" label-width="120px" width="200">
      <el-form-item label="学生姓名">
        <el-input placeholder="王鹏宇" v-model="form.name" />
      </el-form-item>
      <el-form-item label="学号">
        <el-input placeholder="2017211xxx" v-model="form.stdNum" />
      </el-form-item>
      <el-form-item label="班主任">
        <el-select v-model="form.header" placeholder="张伟">
          <el-option label="班主任1" value="张伟" />
          <el-option label="班主任2" value="李强" />
          <el-option label="..." value="..." />
        </el-select>
      </el-form-item>
      <el-form-item label="入学年份">
        <el-col :span="11">
          <el-date-picker v-model="form.date" type="date" placeholder="2019-09-01" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="就读类型">
        <el-radio-group v-model="form.education">
          <el-radio label="本科生" />
          <el-radio label="研究生" />
          <el-radio label="博士生" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input placeholder="我是一个可爱的安卓Boy." v-model="form.intro" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
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
    onSubmit() {
      this.$store.dispatch('user/info', this.form).then(() => {
        console.log('Submit successful.')
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

