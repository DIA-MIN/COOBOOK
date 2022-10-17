<template>
  <div></div>
</template>
<script>
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      recipes: [],
      options: {
        method: 'GET',
        url: `http://openapi.foodsafetykorea.go.kr/api/${process.env.VUE_APP_API_KEY}/COOKRCP01/json/1/1000`
      }
    }
  },
  setup() {},
  created() {
    this.getRecipes()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getRecipes() {
      try {
        const response = await axios.request(this.options)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
