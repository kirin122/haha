<template>
  <main>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
      :rules="rules"
    >
      <el-form-item
        label="Author"
        prop="author"
        required
      >
        <el-input
          v-model="form.author"
        />
      </el-form-item>
      <el-form-item
        label="Title"
        prop="title"
        required
      >
        <el-input
          v-model="form.title"
        />
      </el-form-item>
      <el-form-item
        label="Content"
        prop="content"
        required
      >
        <el-input
          v-model="form.content"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >Submit</el-button>
      </el-form-item>
    </el-form>

  </main>
</template>

<script>
import { mapActions } from 'vuex'
import getId from '@/mixin/getId.js'
import getCurrentDateTime from '@/mixin/getCurrentDateTime.js'

export default {
  mixins: [getId, getCurrentDateTime],
  data() {
    return {
      articleId: '',
      createTime: '',
      updateTime: '',
      form: {
        author: '',
        title: '',
        content: ''
      },
      rules: {
        author: [
          { required: true, message: '請輸入您的名稱', trigger: 'change' }
        ],
        title: [
          { required: true, message: '請輸入標題', trigger: 'change' }
        ],
        content: [
          { required: true, message: '請輸入內容', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    console.log(process.env.NODE_ENV)
  },
  methods: {
    ...mapActions({
      createArticle: 'blog/createArticle'
    }),
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.form['articleId'] = this.getId()
          this.form['createTime'] = this.getCurrentDateTime()
          this.form['updateTime'] = this.form.createTime
          this.createArticle(this.form)
          console.log(this.form)
          this.$message({
            type: 'success',
            message: '新增成功'
          })
        } else {
          this.$message({
            type: 'error',
            message: '請填入正確內容'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
