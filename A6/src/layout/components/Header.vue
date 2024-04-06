<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="(item, index) in menu"
        :key="index"
        :index="item.name"
      >
        <router-link
          :to="{'name':item.name,'params':{'id':'0'}}"
        >
          {{ item.title }}
        </router-link>
      </el-menu-item>
    </el-menu>
  </header>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 'Blog',
      menu: [
        { title: '文章列表', name: 'Blog' },
        { title: '新增文章', name: 'Create' },
        { title: '更新文章', name: 'Update' },
        { title: '文章內容', name: 'BlogID' }
      ]
    }
  },
  watch: {
    $route: {
      handler(to, _from) {
        this.menu.forEach(itme => {
          if (to.name === itme.name) this.activeIndex = itme.name
        })
      }
    },
    immediate: true
  }
}
</script>
