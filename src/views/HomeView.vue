<template>
  <div>
    <Header />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
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
