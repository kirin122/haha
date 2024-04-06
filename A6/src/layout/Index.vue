<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layout/components/Header'
import Footer from '@/layout/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
