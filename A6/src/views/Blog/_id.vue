<template>
  <main>
    <h1>文章內容</h1>
    <div v-if="data">
      <section>
        <h2>{{ data.title }}</h2>
        <p>新增時間：{{ data.createTime }}</p>
        <p>更新時間：{{ data.updateTime }}</p>
        <p>作者：{{ data.author }}</p>
        <article>
          {{ data.content }}
        </article>
      </section>
      <section class="comment-list">
        <h3>留言</h3>
        <div
          v-for="(item, index) in commentList($route.params.id)"
          :key="index"
        >
          <div
            v-if="item.parentCommentId !== 'null'"
            class="content"
          >
            <h5>{{ item.user }}</h5>
            <p>{{ item.content }}</p>
            <el-button
              size="mini"
              @click="onComment(scope.row)"
            >回覆</el-button>
          </div>
          <div
            v-for="(secItem, secIndex) in commentListSec($route.params.id)"
            :key="secIndex"
          >
            <div v-if="secItem.parentCommentId === item.commentId">
              <h5>{{ item.user }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="comment">
        <el-form
          ref="form"
          :model="form"
          label-width="70px"
          :rules="rules"
        >
          <el-form-item
            label="User"
            prop="user"
          >
            <el-input
              v-model="form.user"
            />
          </el-form-item>
          <el-form-item
            label="Content"
            prop="content"
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
    </div>
    <div v-else>
      <p>沒有這篇文章</p>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import getId from '@/mixin/getId.js'
import getCurrentDateTime from '@/mixin/getCurrentDateTime.js'

export default {
  mixins: [getId, getCurrentDateTime],
  data() {
    return {
      data: null,
      comments: null,
      form: {
        articleId: null,
        commentId: null,
        createTime: null,
        user: null,
        content: null,
        parentCommentId: null
      },
      rules: {
        user: [
          { required: true, message: '請輸入您的名稱', trigger: 'change' }
        ],
        content: [
          { required: true, message: '請輸入內容', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['blogDetail', 'commentList', 'commentListSec'])
  },
  created() {
    this.data = this.blogDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      createComment: 'comment/createComment'
    }),
    onComment(item) {
      this.form.parentCommentId = item.commentId
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.form.articleId = this.data.articleId
          this.form.commentId = this.getId()
          this.form.createTime = this.getCurrentDateTime()
          this.createComment(this.form)
          this.$message({
            type: 'success',
            message: '新增成功'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.comment-list {
  width: 100%;
   max-width: 400px;
   margin:50px auto;
   h3 {
    font-size: 1.5rem;
    font-weight: 600;
   }
   .content {
    display: flex;
    text-align:left;
    margin-bottom: 10px;
    h5 {
      font-weight: 600;
      min-width: 30px;
      padding-right: 2rem;
    }
    p{
      width: 100%;
    }
   }
}
.comment{
  width: 100%;
   max-width: 400px;
   margin:50px auto;
   h4 {
    font-size: 1.5rem;
    font-weight: 600;
   }
}
</style>
