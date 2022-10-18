<template>
  <div class="home">
    <Header />
    <Banner />
    <Category />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Category from '@/components/Category.vue'

export default {
  components: {
    Header,
    Banner,
    Category
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
