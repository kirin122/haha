<template>
  <main>
    <h1>文章內容</h1>
    <section v-if="data">
      <h2>{{ data.title }}</h2>
      <p>新增時間：{{ data.createTime }}</p>
      <p>更新時間：{{ data.updateTime }}</p>
      <p>作者：{{ data.author }}</p>
      <article>
        {{ data.content }}
      </article>
    </section>
    <section v-else>
      <p>沒有這篇文章</p>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      data: null
    }
  },
  computed: {
    ...mapGetters(['blogDetail'])
  },
  created() {
    this.data = this.blogDetail(this.$route.params.id)
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
