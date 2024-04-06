<template>
  <main>
    <h1>更新文章</h1>
    <section v-if="articleId">
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
    </section>
    <section v-else>
      <p>沒有這篇文章</p>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import getCurrentDateTime from '@/mixin/getCurrentDateTime.js'

export default {
  mixins: [getCurrentDateTime],
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
  computed: {
    ...mapGetters(['blogDetail'])
  },
  created() {
    this.handleData()
  },
  methods: {
    ...mapActions({
      updateArticle: 'blog/updateArticle'
    }),
    handleData() {
      const data = this.blogDetail(this.$route.params.id)
      this.articleId = data?.articleId
      this.createTime = data?.createTime
      this.updateTime = data?.updateTime
      this.form = {
        author: data?.author,
        title: data?.title,
        content: data?.content
      }
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.form['articleId'] = this.articleId
          this.form['createTime'] = this.createTime
          this.form['updateTime'] = this.getCurrentDateTime()
          this.updateArticle(this.form)
          this.$message({
            type: 'success',
            message: '更新成功'
          })
          this.$router.push('/blog')
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
