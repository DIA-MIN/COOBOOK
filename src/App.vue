<template>
  <div id="main">
    <Header />
    <Banner />
    <router-view />
  </div>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Banner,
    Footer
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
