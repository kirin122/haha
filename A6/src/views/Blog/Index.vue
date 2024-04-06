<template>
  <main>
    <h1>文章列表</h1>
    <el-table
      :key="tableKey"
      :data="blogList"
      style="width: 100%"
    >
      <el-table-column
        prop="updateTime"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="author"
        label="作者"
        width="180"
      />
      <el-table-column
        prop="title"
        label="標題"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="onDetail(scope.row)"
          >詳細</el-button>
          <el-button
            size="mini"
            @click="onUpdate(scope.row)"
          >更新</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="onDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      tableKey: false
    }
  },
  computed: {
    ...mapGetters(['blogList'])
  },
  created() {
  },
  methods: {
    ...mapActions({
      deleteArticle: 'blog/deleteArticle'
    }),
    onDetail(item) {
      this.$router.push('/blog/' + item.articleId)
    },
    onUpdate(item) {
      this.$router.push('/update/' + item.articleId)
    },
    onDelete(item) {
      this.deleteArticle(item.articleId)
      this.tableKey = !this.tableKey
    }
  }
}
</script>

<style lang="scss">
</style>
