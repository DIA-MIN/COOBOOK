<template>
  <div>
    <Header />
    <Banner />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Header,
    Banner
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

//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
